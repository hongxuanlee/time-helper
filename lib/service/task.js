const _ = require('lodash');
const assert = require('assert');
const Base = require('./base');

class Task extends Base {
  constructor() {
    super();
  }

  getCollectionName(){
    return 'task';
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
      findTaskByDate: (date, col) => {
        return col.find({
          'date': date
        }).toArray();
      }
    };
  }
}

module.exports = new Task();
