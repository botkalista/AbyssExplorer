const { BrowserWindow, app } = require('electron');

app.whenReady().then(() => {

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
        },
        autoHideMenuBar: true
    });

    win.menuBarVisible = false;
    win.loadFile('static/index.html');


});