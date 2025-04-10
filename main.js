const { app, BrowserWindow } = require('electron');
function createWindow() {
 const win = new BrowserWindow({
 width: 800,
 height: 600,
 webPreferences: {
 nodeIntegration: true,
 },
 });
 win.loadFile('index.html'); // Make sure an index.html file exists
}
app.whenReady().then(createWindow);
