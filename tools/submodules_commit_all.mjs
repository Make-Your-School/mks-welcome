// run with
// node submodules_commit_all.mjs

git submodule foreach

export async function main() {
    console.log(`found '${reposData.length}' repos to process..`)
    // const repoData = reposData[0]
    // {
    for (const repoData of reposData) {
        NodeGit.Repository.open(pathToRepo).then(function (repo) {
            // Inside of this function we have an open repo
        })
    }

}

main()
