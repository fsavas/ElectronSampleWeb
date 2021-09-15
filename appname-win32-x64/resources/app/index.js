const electron = require("electron");
const { app, BrowserWindow, Menu } = electron;

const urls = [
    "https://localhost:44353/"
]

const createWindow = () =>{
    win = new BrowserWindow({
        center: true,
        resizable: true,
        webPreferences:{
            nodeIntegration: false,
            show: false
        }
    });
    win.maximize();
    //win.webContents.openDevTools();
    //win.webContents.
    console.log(urls[0]);

    win.loadURL(urls[0]);
    // win.loadURL(url.format({
    //     pathname: path.join(__dirname,"index.html"),
    //     protocol: 'file',
    //     slashes: true
    // }));
    win.once('ready-to-show',()=>{
        win.show()
    });

    win.on('closed',()=>{
        win = null;
    });

    const mainMenuTemplate = [];
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
}

app.on('ready', createWindow);