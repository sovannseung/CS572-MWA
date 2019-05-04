const express = require('express');
const axios = require('axios');

const app = express();

app.set('x-powered-by', false);
app.enable('strict routing');
app.enable('case sensitive routing');
app.enable('trust proxy');
app.enable('etag');

async function getData() {
    try {
        const data = await axios.get('https://randomuser.me/api/?results=10');
        return data.data;
    } catch (err) {
        console.log("error--- " + err);
    }
}


app.get('/users', (req, res) => {
    res.set('Link', '<https://randomuser.me/api/?page=1&results=10&seed=abc>; rel=first ,<https://randomuser.me/api/?page=1&results=10&seed=abc>; rel=prev ,<https://randomuser.me/api/?page=2&results=10&seed=abc>; rel=next,<https://randomuser.me/api/?page=3&results=10&seed=abc>; rel=last');
    res.set('Cache-Control', 'private,max-age=86400');
    getData().then(data => {
        res.json(data);
    })
});

app.listen(3000);