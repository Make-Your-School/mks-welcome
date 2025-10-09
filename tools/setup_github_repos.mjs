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

async function listMYSRepos(octokit) {
    try {
        const response = await octokit.request('GET /users/{username}/repos', {
            username: 'Make-Your-School',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        })
        // console.log('Response Data:', response.data)
        console.log('Response Data:')
        // for (const repo of response.data) {
        //     console.log(repo.name)
        // }
        const repoNames = response.data.map((item) => {
            return { name: item.name, clone_url: item.clone_url }
        })
        // console.log("repoNames", repoNames)
        return repoNames
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
    console.log('knownRepos', knownRepos)
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    console.log('')
    console.log('')
    // const submodulePathBase = './public/mks/parts/'

    console.log(`found '${reposData.length}' repos to process..`)
    for (const repoData of reposData) {
        if (knownRepos.some((repo) => repo.name == repoData.repoName)) {
            console.log(`skipping '${repoData.repoName}'. already known..`)
            repoData.clone_url = knownRepos.find((repo) => repo.name == repoData.repoName)
        } else {
            console.log(`creating repo for '${repoData.repoName}'`)
            const result = await createRepoFromTemplate(
                octokit,
                repoData.repoName,
                repoData.description,
            )
            console.log(`result`, result)
            repoData.clone_url = result.data.clone_url
        }
    }
    // save to disc
    const repoDataJson = JSON.stringify(repoData, null, 4)
    fs.writeFileSync(reposDataFile, repoDataJson)
    console.log('done.')
}

main()
