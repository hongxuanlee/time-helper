const task = require('../model/task');

let getDailyJob = function() {
  return task.findJobByDate(new Date());
}

module.exports = {
  getDailyJob
}
