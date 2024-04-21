const _ = require('lodash');
const argv = process.argv.splice(2);
const { spawn } = require('child_process');
const fs = require('fs');
const semver = require('semver')
const path = require('path')
require('colors')


    ; (async () => {
        if (_.isEmpty(argv)) {
            console.log('Usage: xxbin arg1')
            return
        }

        switch (argv[0]) {
            case 'push':
                push()
                break
            default:
                console.log('Unknown command')
                break
        }
    })()

async function push() {
    await updatdeVersion()
    const child = spawn('/bin/bash', ['-c', 'git add -A && git commit -m "update" && git push origin main'])

    child.stdout.on('data', (data) => {
        console.log(data.toString())
    })

    child.stderr.on('data', (data) => {
        console.log(data.toString().yellow)
    })

    console.log("SUCCESS".green)
}

async function updatdeVersion() {
    const pkg = require(path.join(__dirname, './../package.json'))

    // update version package
    const version = semver.inc(pkg.version, 'patch')
    const newPkg = _.cloneDeep(pkg)
    newPkg.version = version

    await fs.promises.writeFile(path.join(__dirname, './../package.json'), JSON.stringify(newPkg, null, 2))

    console.log(`${pkg.version} =>  ${newPkg.version}`)
}