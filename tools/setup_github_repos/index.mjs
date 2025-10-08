'THIS IS UNTESTED AND JUST A MEMO!!'

// install these:
// yarn add @octokit/core
// yarn add dotenv

// run with node setup_github_repos.mjs

import { exec } from 'child_process'
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
// const reposDataFile = resolve(__dirname, 'repoData.json')
// const rawData = readFileSync(reposDataFile, 'utf-8')
// const reposData = JSON.parse(rawData)

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
        const repoNames = response.data.map((item) => item.name)
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

export async function main() {
    // fixed configuration
    // Octokit.js
    // https://github.com/octokit/core.js#readme
    const octokit = new Octokit({
        auth: process.env.GITHUB_PAC,
    })

    await testOctokitRequest(octokit)
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("");
    const knowRepos = await listMYSRepos(octokit);
    console.log('knowRepos', knowRepos)
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("");
    console.log("");
    // const submodulePathBase = './public/mks/parts/'

    console.log(`found '${reposData.length}' repos to process..`)
    for (const repoData of reposData) {
        if (repoData.repoName in knowRepos) {
            console.log(`skipping '${repoData.repoName}'. already known..`)
        } else {
            console.log(`creating repo for '${repoData.repoName}'`)
            const result = await createRepoFromTemplate(
                octokit,
                repoData.repoName,
                repoData.description,
            )
            console.log(`result`, result)
            // // const git_url = result.git_url
            // // console.log(`git_url`, git_url)
            const clone_url = result.data.clone_url
            // const clone_url = 'https://github.com/Make-Your-School/mks-Arduino-UNO_R3.git'
            addSubmodule(localRepoPath, submodulePathBase + repoData.repoName, clone_url)
        }
    }
}

main()
