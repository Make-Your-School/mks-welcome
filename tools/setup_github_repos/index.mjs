'THIS IS UNTESTED AND JUST A MEMO!!'

// install these:
// yarn add @octokit/core
// yarn add dotenv

// run with node setup_github_repos.mjs

import { exec } from 'child_process'
import { Octokit } from '@octokit/core'
import dotenv from 'dotenv'

import { data as reposData } from 'reposData'
// import { readFileSync } from 'fs'
// import { dirname, resolve } from 'path'
// import { fileURLToPath } from 'url'
// const __dirname = dirname(fileURLToPath(import.meta.url))
// // console.log('__dirname', __dirname)
// const reposDataFile = resolve(__dirname, 'repoData.json')
// const rawData = readFileSync(reposDataFile, 'utf-8')
// const reposData = JSON.parse(rawData)

// Load environment variables from .env file
dotenv.config()

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

async function testOctokitRequest(octokit) {
    try {
        const response = await octokit.request('GET /users/{username}/repos', {
            username: 'Make-Your-School',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        })
        console.log('Response Data:', response.data)
    } catch (error) {
        console.error('Error making Octokit request:', error)
    }
}

// Function to execute shell commands and return a Promise
function runCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`)
                reject(error)
                return
            }
            if (stderr) {
                console.error(`Stderr: ${stderr}`)
                reject(new Error(stderr))
                return
            }
            console.log(`Stdout: ${stdout}`)
            resolve()
        })
    })
}

async function addSubmodule(localRepoPath, submodulePath, remoteRepoUrl) {
    try {
        await runCommand(
            `cd ${localRepoPath} && git submodule add ${remoteRepoUrl} ${submodulePath}`,
        )
        await runCommand(`cd ${localRepoPath} && git submodule update --init --recursive`)
        console.log('Submodule added successfully!')
    } catch (error) {
        console.error('Failed to add submodule:', error)
    }
}

export function main() {
    // fixed configuration
    const localRepoPath = resolve(process.cwd(), '.')
    console.log('localRepoPath', localRepoPath)

    console.log(reposData)

    // Octokit.js
    // https://github.com/octokit/core.js#readme
    const octokit = new Octokit({
        auth: process.env.GITHUB_PAC,
    })

    // testOctokitRequest(octokit)

    for (const repoData of reposData) {
        console.log(repoData)
        // const result = createRepoFromTemplate(octokit, repoData.name, repoData.description)
        // const git_url = result.git_url
        // const clone_url = result.clone_url
        // addSubmodule(localRepoPath, repoData.name, )
    }
}

main()
