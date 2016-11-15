const {ipcRenderer} = require('electron');

let request = (name, args) => {
  return new Promise((resolve, reject) => {
    console.log(name, args);
    if(!name){
      return;
    }
    ipcRenderer.send(name, args);
    ipcRenderer.once(`${name}_reply`, (event, arg) => {
      resolve(arg);
    });
  });
}

module.exports = request
