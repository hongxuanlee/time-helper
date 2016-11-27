const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
require('electron-reload')(path.join(__dirname, '..'), {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  ignored: /node_modules|[\/\\]\./
});
const notify = require('./lib/notify'); 
const router = require('./lib/router');


router();
let win;

let createWindow = () => {
  win = new BrowserWindow({width: 800, height: 600});
  notify(); 
  win.loadURL(`file://${__dirname}/index.html`);

  win.on('closed', () => {
    win = null;
  });
};

global.msg = 'Hi kino!';

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
});

app.on('activate', () => {
   if(win === null){
      createWindow();
   }
});

