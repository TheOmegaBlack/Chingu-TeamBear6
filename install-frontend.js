/* eslint-disable no-console */

const { execSync } = require('child_process')
const os = require('os')

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
    windows: 'del /S /Q  static',
  },
  cloneFresh: `git clone -b ${branchName} ${frontendGitUrl}`,
  moveRepo: {
    mac: `mv ./${dirName}/build ./static`,
    windows: `move "${dirName}/build" "static"`,
  },
}

console.log(opSys)
console.log(codeLines.removeRepo[opSys])
console.log(codeLines.removeBuild[opSys])
console.log(codeLines.moveRepo[opSys])

// May not work on Windows OS. should be fixed

const installFrontendScript = () => {
  printInfo('Removing previous frontend repo')
  execAndPrint(codeLines.removeRepo[opSys])
  printInfo('Removing previous frontend build')
  execAndPrint(codeLines.removeBuild[opSys])
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
