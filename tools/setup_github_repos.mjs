// install these:
// yarn add @octokit/core
// yarn add dotenv

// run with node setup_github_repos.mjs

import fs from 'node:fs'
import { Octokit } from '@octokit/core'
import dotenv from 'dotenv'

// import { data as reposData } from './reposData.mjs'
import reposData from './reposData.json' with { type: 'json' }
// import { readFileSync } from 'fs'
import { resolve } from 'path'
import { log } from 'console'

// import { fileURLToPath } from 'url'
// const __dirname = dirname(fileURLToPath(import.meta.url))
// // console.log('__dirname', __dirname)

const reposDataFile = './reposData.json'

const localRepoPath = resolve(process.cwd(), '..')
console.log('localRepoPath', localRepoPath)

// Load environment variables from .env file
// dotenv.config({ path: `${localRepoPath}/tools/setup_github_repos/.env` })
dotenv.config({ path: `.env` })

async function createRepoFromTemplate(octokit, name, description) {
    const result = await octokit.request('POST /repos/{template_owner}/{template_repo}/generate', {
        template_owner: 'Make-Your-School',
        template_repo: 'mks-BauteilTemplate',
        owner: 'Make-Your-School',
        name: name,
        description: description,
        include_all_branches: false,
        private: false,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28',
        },
    })
    return result
}

async function repoSetHomepage(octokit, name, homepage) {
    const result = await octokit.request('PATCH /repos/{owner}/{repo}', {
        owner: 'Make-Your-School',
        repo: name,
        name: name,
        homepage: homepage,
        // description: 'This is your first repository',
        // private: true,
        // has_issues: true,
        // has_projects: true,
        // has_wiki: true,
        // topics not allowed. skipping for now.
        // topics: 'markdown arduino library mks make-your-school',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28',
        },
    })
    return result
}

async function listMYSRepos(octokit) {
    const regexLinkNext = /<(?<url_next>.*?)>; rel="next"/gm
    try {
        let response = await octokit.request('GET /users/{username}/repos', {
            username: 'Make-Your-School',
            per_page: 100,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        })
        // console.log('Response:', response)
        // console.log('Response.headers:', response.headers)
        // console.log('Response Data:')
        // for (const repo of response.data) {
        //     console.log(repo.name)
        // }
        const repoList = response.data.map((item) => {
            return { name: item.name, clone_url: item.clone_url }
        })

        console.error('response.headers.link', response.headers.link)
        // '<https://api.github.com/user/99975041/repos?page=2>; rel="next", <https://api.github.com/user/99975041/repos?page=3>; rel="last"'
        let url_next = regexLinkNext.exec(response.headers.link)?.groups?.url_next
        while (url_next) {
            console.error('pagination aktive! we need to get the rest...')
            console.log('url_next', url_next)
            response = await octokit.request(url_next, {
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28',
                },
            })
            const repoListTemp = response.data.map((item) => {
                return { name: item.name, clone_url: item.clone_url }
            })
            repoList.push(...repoListTemp)
            url_next = regexLinkNext.exec(response.headers.link)?.groups?.url_next
        }

        // console.log("repoList", repoList)
        return repoList
    } catch (error) {
        console.error('Error making Octokit request:', error)
    }
}

async function testOctokitRequest(octokit) {
    try {
        const { data } = await octokit.request('/user')
        console.log('data', data)
    } catch (error) {
        console.error('Error making Octokit request:', error)
    }
}

export async function main() {
    // fixed configuration
    // Octokit.js
    // https://github.com/octokit/core.js#readme
    const octokit = new Octokit({
        auth: process.env.GITHUB_PAC,
    })

    await testOctokitRequest(octokit)
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    console.log('')
    const knownRepos = await listMYSRepos(octokit)
    console.log(
        'knownRepos',
        knownRepos.map((item) => `${item.name}:${item.clone_url}`),
    )
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    console.log('')
    console.log('')
    console.log(`found '${reposData.length}' repos to process..`)
    for (const repoData of reposData) {
        if (knownRepos.some((repo) => repo.name == repoData.repo_name)) {
            console.log(`skipping '${repoData.repo_name}'. already known..`)
            repoData.clone_url = knownRepos.find((repo) => repo.name == repoData.repo_name).clone_url
        } else {
            console.log(`creating repo for '${repoData.repo_name}'`)
            repoData.description = `Bauteil des Make Your School Material Koffer Sets.`
            const result = await createRepoFromTemplate(
                octokit,
                repoData.repo_name,
                repoData.description,
            )
            const homepage = `https://make-your-school.github.io/mks-welcome/part/${repoData.repo_name.toLowerCase}`
            repoSetHomepage(octokit, repoData.repo_name, homepage)

            // console.log(`result`, result)
            repoData.clone_url = result.data.clone_url
            console.log(`    clone_url: ${repoData.clone_url}`)
            console.log(`    ratelimit remaining: ${result.headers['x-ratelimit-remaining']}`)
        }
    }
    // save to disc
    const repoDataJson = JSON.stringify(reposData, null, 4)
    fs.writeFileSync(reposDataFile, repoDataJson)
    console.log('done.')
}

main()
