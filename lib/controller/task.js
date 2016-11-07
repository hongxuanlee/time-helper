const task = require('../model/task');

task.findJobByDate(new Date().toISOString()).then((data) => {
  console.log(data);
}).catch((e) => {
  console.log(e);
});

