const {app, BrowserWindow, Menu} = require('electron')

process.env.NODE_ENV = 'production'

const isDev = process.env.NODE_ENV !== 'production' ? true : false
const isMac = process.platform === 'darwin' ? true: false

let mainWindow

function createMainWindown(){
     mainWindow = new BrowserWindow({
        title: 'ImageShrink',
        width: 500,
        height: 600,
        icon: `${__dirname}/assets/icons/Icon_256x256.png`,
        resizable: isDev
    })

    mainWindow.loadFile(`${__dirname}/app/index.html`)
}

app.on('ready', ()=>{
  createMainWindown()

  const mainMenu = Menu.buildFromTemplate(menu)
  Menu.setApplicationMenu(mainMenu)

  mainWindow.on('close', ()=> mainWindow = null)
})

const menu = [
  ...(isMac ? [{role: 'appMenu'}]: [] ),
  {
    label: 'File',
    submenu: [
      {
        label: "Quit",
        click: () => app.quit() 
      }
    ]
  }
]



app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  })