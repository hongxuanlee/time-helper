const {ipcRenderer} = require('electron');
const Timeout = 10000;

let request = (name, args) => {
  return new Promise((resolve, reject) => {
    if(!name){
      return;
    }
    ipcRenderer.send(name, args);
    ipcRenderer.once(`${name}_reply`, (event, arg) => {
      resolve(arg);
    });
    setTimeout(() => {
      reject('timeout');
    }, Timeout);
  });
};

module.exports = request;
