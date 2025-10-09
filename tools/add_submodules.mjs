// run with
// node addSubmodules.mjs

import { exec } from 'child_process'

import reposData from './reposData.json' with { type: 'json' }

import { resolve } from 'path'

// import { readFileSync } from 'fs'
// import { fileURLToPath } from 'url'
// const __dirname = dirname(fileURLToPath(import.meta.url))
// // console.log('__dirname', __dirname)
// const reposDataFile = resolve(__dirname, 'repoData.json')
// const rawData = readFileSync(reposDataFile, 'utf-8')
// const reposData = JSON.parse(rawData)

const localRepoPath = resolve(process.cwd(), '..')
console.log('localRepoPath', localRepoPath)


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
