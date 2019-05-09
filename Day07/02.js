const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01', {useNewUrlParser: true});

let db;
let collection;

app.use((req, res, next)=>{
    if(!db){
        client.connect(function(err){
            db = client.db('homework01');
            collection = db.collection('data');
            req.db = db;
            next();
        });
    }
    else{
        req.db = db;
        next();
    }
});

app.get('/secret', function(req, res, next){
    collection.find().project({key:1, message:1, _id:0}).toArray(function(err, doc){
        const encryptor = require('simple-encryptor')(doc[0].key);
        var decrypted = encryptor.decrypt(doc[0].message);
        res.send(decrypted);
    });
});

app.listen(8888, function(){
    console.log('App is listen on port: 8888');
});