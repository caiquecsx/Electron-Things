const electron = require('electron')
const {app} = electron

const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow(){
  mainWindow = new BrowserWindow({minWidth: 800, minHeight: 600})
  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html')
}

app.on('ready', createWindow)
