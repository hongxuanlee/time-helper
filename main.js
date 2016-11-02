const {app, BrowserWindow} = require('electron');
const notify = require('./lib/notify'); 

let win;

let createWindow = () => {
  win = new BrowserWindow({width: 800, height: 600});
  notify(); 
  win.loadURL(`file://${__dirname}/index.html`);

  win.on('closed', () => {
    win = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    console.log('darwin');
    app.quit();
  }
});

app.on('activate', () => {
   if(win === null){
      createWindow();
   }
})

