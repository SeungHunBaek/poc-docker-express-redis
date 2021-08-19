const express = require('express');
const cache = require('./redis.js');
const app = express() 

const redis = require('Redis');
const client = redis.createClient({
    host: "container-redis",
    port: 6379,
})

app.get('/', (req, res) => {
    
        res.send('Hello World')
        client.set('baek','abc')
        setTimeout(() => {
            console.log(client.get('baek'));
        }, 100);
    }
); 

app.listen(3000, () => { 
    console.log('My REST API running on port 3000!'); 
})

