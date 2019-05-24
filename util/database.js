const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (cb) => {
    MongoClient.connect('mongodb+srv://Gaurav4741:Monica4741@cluster0-lkv3w.mongodb.net/test?retryWrites=true')
        .then(res => {
            console.log('connected');
            cb(res);
        })
        .catch(err => {
            console.log(err)
        });

};

module.exports = mongoConnect;


