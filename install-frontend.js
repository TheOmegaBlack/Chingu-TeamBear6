/* eslint-disable no-console */

const { execSync } = require('child_process')
const os = require('os')

const frontendGitUrl = 'https://github.com/chingu-voyage4/Bears-Team-6.git'
const dirName = 'Bears-Team-6'
const branchName = 'current-sprint'

const print = (str) => console.log(`${str}\n`)
const printInfo = (str) => print(`   ... ${str}`)
const execAndPrint = (command) => print(execSync(command))

// May not work on Windows OS. should be fixed

const installFrontendScript = () => {
  printInfo('Removing previous frontend repo')
  if (os.platform() === 'win32') {
    execAndPrint('del "Bears-Team-6"')
  } else {
    execAndPrint('rm -rf ./Bears-Team-6')
  }

  printInfo('Removing previous frontend build')
  if (os.platform() === 'win32') {
    execAndPrint('del "static"')
  } else {
    execAndPrint('rm -rf ./static')
  }

  printInfo('Cloning fresh frontend repo')
  execAndPrint(`git clone -b ${branchName} ${frontendGitUrl}`)

  // printInfo('Installing frontend')
  // execAndPrint(`cd ${dirName} && npm i && cd ..`)

  // printInfo('Testing frontend')
  // execAndPrint(`cd ${dirName} && npm test && cd ..`)

  // printInfo('Building frontend')
  // execAndPrint(`cd ${dirName} && npm run build && cd ..`)

  printInfo('Moving frontend')
  if (os.platform() === 'win32') {
    execAndPrint(`move "${dirName}/build" "static"`)
  } else {
    execAndPrint(`mv ./${dirName}/build ./static`)
  }

  printInfo('Removing frontend repo')
  if (os.platform() === 'win32') {
    execAndPrint('del "Bears-Team-6"')
  } else {
    execAndPrint('rm -rf ./Bears-Team-6')
  }
}

try {
  installFrontendScript()
  print('SUCCESS!')
} catch (e) {
  print(`ERROR! \n${e}`)
}

