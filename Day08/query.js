const app = require('express')();
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb+srv://sa:sovanndb@sovanncluster-kfruj.gcp.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

let db;
let collection;

app.use((req, res, next)=>{
    if(!db){
        client.connect(function(err){
            db = client.db('db_day08');
            collection = db.collection('col_day08');
            req.db = db;
            next();
        });
    }else{
        req.db = db;
        next();
    }
});

app.get('/A01', function(req, res){
    collection.find().toArray((err, doc)=>{
        res.json(doc);
    });
});

app.listen(8888, function(){
    console.log('server listen port 8888');
});