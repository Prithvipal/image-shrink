const {app, BrowserWindow} = require('electron')

let mainWindow

function createMainWindown(){
     mainWindow = new BrowserWindow({
        title: 'ImageShrink',
        width: 500,
        height: 600,
        icon: `${__dirname}/assets/icons/Icon_256x256.png`
    })

    mainWindow.loadFile(`${__dirname}/app/index.html`)
}

app.on('ready', createMainWindown)