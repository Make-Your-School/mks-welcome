// run with
// node addSubmodules.mjs

import { exec } from 'child_process'

import reposData from './reposData.json' with { type: 'json' }

import { resolve } from 'path'

const localRepoPath = resolve(process.cwd(), '..')
console.log('localRepoPath', localRepoPath)
const submodule_pathBase = './public/mks/parts/'

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

async function addSubmodule(repo_name, localRepoPath, submodule_pathBase, remoteRepoUrl) {
    try {
        const submodule_path = submodule_pathBase + repo_name
        console.log('    add..')
        let result = undefined
        result = await runCommand(
            `cd ${localRepoPath} && git submodule add ${remoteRepoUrl} ${submodule_path}`,
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
            console.error(`Failed to add submodule: '${repo_name}' \n`, error)
        }
    }
}

export async function main() {
    console.log(`found '${reposData.length}' repos to process..`)
    // const repoData = reposData[5]; {
    for (const repoData of reposData) {
        console.log(`add s'${repoData.repo_name}' as submodule.`)
        await addSubmodule(repoData.repo_name, localRepoPath, submodule_pathBase, repoData.clone_url)
    }
}

main()
