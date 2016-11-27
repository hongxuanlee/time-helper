const job = require('../service/job');
const task = require('../service/task');
const _ = require('lodash');

let getDailyJob = () => job.findJobByDate(new Date());

let splitJobToTask = (jobId, source) => {
  if (_.isArray(source)) {
    return task.insert(source.map((item) => {
      item.jobId = jobId;
      return item;
    }));
  }else{
    source.jobId = jobId;
    return task.insert(source);
  }
};

module.exports = {
  getDailyJob,
  splitJobToTask
};