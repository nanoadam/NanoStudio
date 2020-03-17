const { app, BrowserWindow } = require('electron');
const path = require('path');
let mainWindow;

createWindow = () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadFile('./public/index.html');
};

app.on('ready', createWindow);
