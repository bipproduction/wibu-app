const path = require('path');
const SemVer = require('semver');
const fs = require('fs');
const _ = require('lodash');
require('colors');

; (async () => {
    try {
        const pkg = require(path.join(__dirname, './../package.json'))
        // update version package
        const version = SemVer.inc(pkg.version, 'patch')
        const newPkg = _.cloneDeep(pkg)
        newPkg.version = version
        await fs.promises.writeFile(path.join(__dirname, './../package.json'), JSON.stringify(newPkg, null, 2))
        console.log(`${pkg.version} =>  ${newPkg.version}`.cyan)
    } catch (error) {
        console.log(`${error}`.yellow)
    }
})()