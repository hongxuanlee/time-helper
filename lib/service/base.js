const connect = require('./connect');

class Base {
  constructor() {
    let ops = this.getOperation();
    let doWrap = this.wrap.bind(this);
    let res = {};
    for (let key in ops) {
      res[key] = doWrap(ops[key]);
    }
    res['model'] = doWrap();
    return res;
  }

  wrap(op) {
    let collection = this.getCollectionName();
    if(!collection){
      return;
    }
    return (obj) => {
      return new Promise((resolve, reject) => {
        connect().then((db) => {
          let col = db.collection(collection);
          if (!op) {
            resolve(col);
          }
          op(obj, col).then((res) => {
            resolve(res);
            // db.close();
          }).catch((e) => {
            reject(e);
          });
        });
      });
    };
  }

  getCollectionName(){
    return false;
  }

  getOperation() {
    return {};
  }
}

module.exports = Base;