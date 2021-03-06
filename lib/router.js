const {
  ipcMain
} = require('electron');
const job = require('./controller/job');

const list = [
  [
    'dailyjob', job.getDailyJob
  ],
  [
    'jobToTask', job.splitJobToTask
  ]
];

let router = () => {
  list.forEach((item) => {
    let [
      request,
      handle
    ] = item;
    let reply = `${request}_reply`;
    process(request, reply, handle);
  });
};

function process(request, reply, handle) {
  ipcMain.on(request, (event, arg) => {
    handle(arg).then((res) => {
      event.sender.send(reply, res);
    });
  });
}

module.exports = router;