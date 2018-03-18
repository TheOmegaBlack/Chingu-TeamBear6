/* eslint-disable no-console */

const { execSync } = require('child_process')
const os = require('os')
const fs = require('fs')

const frontendGitUrl = 'https://github.com/chingu-voyage4/Bears-Team-6.git'
const dirName = 'Bears-Team-6'
const branchName = 'logout-#48' // 'current-sprint'

const print = (str) => console.log(`${str}\n`)
const printInfo = (str) => print(`   ... ${str}`)
const execAndPrint = (command) => print(execSync(command))
const opSys = os.platform() === 'win32' ? 'windows' : 'mac'

const codeLines = {
  removeRepo: {
    mac: 'rm -rf ./Bears-Team-6',
    windows: 'rmdir /S /Q Bears-Team-6',
  },
  removeBuild: {
    mac: 'rm -rf ./static',
    windows: 'del /S /Q  "static"',
  },
  cloneFresh: `git clone -b ${branchName} ${frontendGitUrl}`,
  moveRepo: {
    mac: `mv ./${dirName}/build ./static`,
    windows: `move "${dirName}\\build/\\*.*" "static"`,
  },
}

// May not work on Windows OS. should be fixed

const installFrontendScript = () => {
  if (fs.existsSync('Bears-Team-6')) {
    console.log('here')
    printInfo('Removing previous frontend repo')
    execAndPrint(codeLines.removeRepo[opSys])
  }
  if (fs.existsSync('static')) {
    printInfo('Removing previous frontend build')
    execAndPrint(codeLines.removeBuild[opSys])
  }
  printInfo('Cloning fresh frontend repo')
  execAndPrint(codeLines.cloneFresh)
  printInfo('Moving frontend')
  execAndPrint(codeLines.moveRepo[opSys])
}

try {
  installFrontendScript()
  print('SUCCESS!')
} catch (e) {
  print(`ERROR! \n${e}`)
}
