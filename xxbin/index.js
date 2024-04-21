const _ = require('lodash');
const argv = process.argv.splice(2);
const { spawn } = require('child_process');
const fs = require('fs');
const pkg = require('../package.json');
const semver = require('semver')
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
    const child = spawn('/bin/bash', ['-c', 'git add -A && git commit -m "update" && git push origin main'])

    child.stdout.on('data', (data) => {
        console.log(data.toString())
    })

    child.stderr.on('data', (data) => {
        console.log(data.toString().red)
    })

    // update version package
    const version = semver.inc(pkg.version, 'patch')
    console.log(`version: ${version}`)
}