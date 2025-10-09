// run with
// node addSubmodules.mjs

import { exec } from 'child_process'

import reposData from './reposData.json' with { type: 'json' }

import { resolve } from 'path'

const localRepoPath = resolve(process.cwd(), '..')
console.log('localRepoPath', localRepoPath)
const submodulePathBase = './public/mks/parts/'

// Function to execute shell commands and return a Promise
function runCommand(command) {
    return new Promise((resolve, reject) => {
        // console.log(`runCommand: '${command}'`);
        return exec(command, (error, stdout, stderr) => {
            if (error) {
                // console.error(`Error: ${error.message}`)
                reject(error)
                return error
            }
            if (stderr) {
                // console.error(`Stderr: ${stderr}`)
                resolve(stderr)
                return stderr
            }
            // console.log(`Stdout: ${stdout}`)
            resolve(stdout)
        })
    })
}

async function addSubmodule(repoName, localRepoPath, submodulePathBase, remoteRepoUrl) {
    try {
        const submodulePath = submodulePathBase + repoName
        console.log('    add..')
        let result = undefined
        result = await runCommand(
            `cd ${localRepoPath} && git submodule add ${remoteRepoUrl} ${submodulePath}`,
        )
        console.log("    ", result)
        console.log('    update --init --recursive')
        result = await runCommand(`cd ${localRepoPath} && git submodule update --init --recursive`)
        console.log("    ", result)
        console.log('Submodule added successfully!')
    } catch (error) {
        if (error.message.includes("already exists in the index")) {
                    console.log(`  skipping - already there.`)
        } else {
            console.error(`Failed to add submodule: '${repoName}' \n`, error)
        }
    }
}

export async function main() {
    console.log(`found '${reposData.length}' repos to process..`)
    // const repoData = reposData[5]; {
    for (const repoData of reposData) {
        console.log(`add s'${repoData.repoName}' as submodule.`)
        await addSubmodule(repoData.repoName, localRepoPath, submodulePathBase, repoData.clone_url)
    }
}

main()
