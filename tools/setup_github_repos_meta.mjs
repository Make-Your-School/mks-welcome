// install these:
// yarn add @octokit/core
// yarn add dotenv

// run with node setup_github_repos.mjs

import fs from 'node:fs'
import { Octokit } from '@octokit/core'
import dotenv from 'dotenv'


import { getsubmodules } from '../getsubmodules.js'

// Load environment variables from .env file
// dotenv.config({ path: `${localRepoPath}/tools/setup_github_repos/.env` })
dotenv.config({ path: `tools/.env` })


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
    console.log('')

    const submodules = getsubmodules()
    console.log(`found '${submodules.length}' submodules to process..`)
    for (const [submodule_name, submodule] of Object.entries(submodules)) {
        console.log('submodule_name', submodule_name)
        console.log('submodule', submodule)
        // const homepage = `https://make-your-school.github.io/mks-welcome/part/${repoData.repo_name.toLowerCase()}`
        // await repoSetHomepage(octokit, repoData.repo_name, homepage)
    }

    console.log('done.')
}

main()
