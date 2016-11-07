const connect = require('./connect');
const _ = require('lodash');
const assert = require('assert');

let insert = function(obj, col) {
  assert(obj, 'insert item required');
  if (_.isArray(obj)) {
    return col.insertMany(obj);
  } else {
    return col.insertOne(obj);
  }
}

let find = function(query, col) {
  return col.find(query).explain();
}

let findJobByDate = function(date, col) {
  return col.find({
    job_start_time: {
      $lte: date
    },
    job_end_time:{
      $gte: date
    }
  }).explain();
}

let wrap = function(op) {
  return (obj) => {
    return new Promise((resolve, reject) => {
      connect().then((db) => {
        let col = db.collection('job');
        if (!op) {
          resolve(col);
        }
        op(obj, col).then((res) => {
          resolve(res);
          db.close();
        }).catch((e) => {
          console.log('error', e);
          reject(e);
        });
      });
    })
  };
}

module.exports = {
  insert: wrap(insert),
  findJobByDate: wrap(findJobByDate),
  find: wrap(find),
  model: wrap()
}
