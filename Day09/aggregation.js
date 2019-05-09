const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const client = new MongoClient('mongodb+srv://sa:sovanndb@sovanncluster-kfruj.gcp.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

let db; 
let collection;

app.use((req, res, next)=>{
    if(!db){
        client.connect(function(err){
            db = client.db('db_zipcode');
            collection = db.collection('col_zipcode');
            req.db = db;
            next();
        });
    }
    else{
        req.db = db;
        next();
    }
});

app.get('/A01', function(req, res){
    collection.aggregate([
        {$match: {state:'WA'}}
    ]).toArray(function(err, doc){
        res.json(doc);
    });
});

app.get('/A02', function(req, res){
    collection.aggregate([
        {$match: {pop: {$lt:5000}}}
    ]).toArray(function(err, doc){
        res.json(doc);
    });
});

app.get('/A03', function(req, res){
    collection.aggregate([
        {$group: {_id: {state:'$state', city:'$city'},
                  countzipcode: {$sum:1}
                 }
        },
        {$match: {countzipcode: {$gt:1}}},
        {$sort: {'_id.state':1, '_id.city':1, countzipcode:1}}
    ]).toArray((err, doc)=>{
        res.json(doc);
    });
});

app.get('/A04', function(req, res){
    collection.aggregate([
        {$group: {_id:{state:'$state', city:'$city'},
                  population: {$sum:'$pop'}}
        },
        {$sort: {'_id.state':1, '_id.city':1, population:1}},
        {$group: {_id:'$_id.state', city: {$first: '$_id.city'}, population: {$first:'$population'}}},
        {$sort: {'_id':1, 'city':1}},
        {$project: {'_id':0, state: '$_id', city:'$city', 'least pop':'$population'}}
    ]).toArray((err, doc)=>{
        res.json(doc);
    });
});

app.listen(8888, function(){
    console.log('server listen on port 8888');
});
