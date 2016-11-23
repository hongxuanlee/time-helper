const {
  ipcMain
} = require('electron');
const task = require('./controller/task');

const list = [{
  request: 'dailyjob',
  handle: task.getDailyJob
}];

let router = () => {
  list.forEach((item) => {
    let {
      request,
      handle
    } = item;
    let reply = `${request}_reply`;
    process(request, reply, handle);
  });
};

function process(request, reply, handle) {
  ipcMain.on(request, (event, arg) => {
    handle(arg).then((res) => {
      console.log(res);
      event.sender.send(reply, res);
    });
  });
}

module.exports = router;