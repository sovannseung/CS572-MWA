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

// 1. Write a MongoDb query to display all the documents in the collection restaurants.
app.get('/A01', function(req, res){
    collection.find().toArray((err, doc)=>{
        res.json(doc);
    });
});

// 2. Display the fields restaurant_id, name, district and cuisine for all the documents in the collection restaurant.
app.get('/A02', function(req, res){
    collection.find().project({restaurant_id:1, name:1, district:1, cuisine:1})
              .toArray(function(err, doc){
                res.json(doc);
              });
});

// 3. Display the fields restaurant_id, name, district and cuisine but exclude the field_id for all the doc
app.get('/A03', function(req, res){
    collection.find().project({restaurant_id:1, name:1, district:1, cuisine:1, _id:0})
                     .toArray(function(err, doc){
                        res.json(doc);
                     });
});

// 4. Display the fields restaurant_id, name, district and zipcode, but exclude the field _id  for all the doc
app.get('/A04', function(req, res){
    collection.find().project({restaurant_id:1, name:1, district:1, 'address.zipcode':1, _id:0})
                     .toArray(function(err, doc){
                        res.json(doc);
                     });
});

// 5. Display all the restaurant which is in the district Bronx
app.get('/A05', function(req, res){
    collection.find({district:'Bronx'}).toArray(function(err, doc){
        res.json(doc);
    });
});

// 6. Display the first 5 the restaurant which is in the district Bronx
app.get('/A06', function(req, res){
    collection.find({district:'Bronx'})
              .limit(5)
              .toArray(function(err, doc){
        res.json(doc);
    });
});

// 7. Display the next 5 restaurants after skipping first 5 which are in the district Bronx
app.get('/A07', function(req, res){
    collection.find({district: 'Bronx'})
              .skip(5)
              .limit(5)
              .toArray(function(err, doc){
                res.json(doc);
              });
});

// 8. Find the restaurants which locates in coord value less than -95.754168
app.get('/A08', function(req, res){
    collection.find({'address.coord': {$lt: -95.754168}})
              .toArray(function(err, doc){
                res.json(doc);
              });
});

// 9. Find the restaurants that does not prepare any cuisine of 'American' and their grade score more than 70 
// and coord value less than -65.754168
app.get('/A09', function(req, res){
    collection.find({cuisine:{$ne:'American'}, grades:{$elemMatch:{score:{$gt:70}}}, 'address.coord': {$lt:-65.754168}})
              .toArray(function(err, doc){
                res.json(doc);
              });
});

// 10. Find the restaurant Id, name, district and cuisine for those restaurants which contains 'Wil'
// as first three letters for its name
app.get('/A10', function(req, res){
    collection.find({name:{$regex:'^Wil'}})
              .project({restaurant_id:1, name:1, district:1, cuisine:1})
              .toArray(function(err, doc){
                res.json(doc);
              });
});

// 11. Find the resturant Id, name, district and cuisine for those restaurants which contains 'ces' as 
// last three letters for its name.

// 12. Find the restaurant Id, name, district and cuisine for those restaurants which contains 'Reg'
// as three letters somewhere in its name

// 13. Find the restaurants which belongs to the district Bronx and prepared either American or Chinese dish.

app.listen(8888, function(){
    console.log('server listen port 8888');
});