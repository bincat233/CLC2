const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'CLC2-win32-ia32/'),
    authors: 'Danya Rose',
    noMsi: true,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'clc2.exe',
    setupExe: 'CLC2Installer.exe',
    setupIcon: path.join(rootPath, '/electron/style/icon.ico')
  })
}