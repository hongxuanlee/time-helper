const _ = require('lodash');
const assert = require('assert');
const Base = require('./base');

class Job extends Base {
  constructor() {
    super();
  }

  getCollectionName(){
    return 'job';
  }

  getOperation() {
    return {
      insert: (obj, col) => {
        assert(obj, 'insert item required');
        if (_.isArray(obj)) {
          return col.insertMany(obj);
        } else {
          return col.insertOne(obj);
        }
      },
      find: (query, col) => {
        return col.find(query).explain();
      },
      findJobByDate: (date, col) => {
        return col.find({
          $or: [{
            job_start_time: {
              $lt: date
            },
            job_end_time: {
              $gt: date
            }
          }, {
            period: 'day'
          }]
        }).toArray();
      }
    };
  }
}

module.exports = new Job();
