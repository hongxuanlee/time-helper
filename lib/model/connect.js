const MongoClient = require('mongodb').MongoClient;
/**
 * config {
 *   user,
 *   pwd,
 *   url
 * }
 */
const config = require('../../config.js');
let dbUrl = `mongodb://${config.user}:${config.pwd}@${config.url}`;
let db = null;

module.exports = () => {
  return new Promise((resolve, reject) => {
      if (db) {
        console.log('retry',db);
        resolve(db);
      } else {
        MongoClient.connect(dbUrl).then((d) => {
           console.log('db connected');
           db = d;
           resolve(db);
        }).catch((e) => {
           reject(e);
        });
      }
  })
}
