const {app, BrowserWindow} = require('electron')

function createMainWindown(){
    const mainWindow = new BrowserWindow({
        title: 'ImageShrink',
        width: 500,
        height: 600
    })
}

app.on('ready', createMainWindown)