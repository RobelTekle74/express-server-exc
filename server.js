// Require express from NPM
const express = require('express');

//Get an application insstance with the app variable
const app = express();

const port = 3000;

let counter = '';

app.post('/increment', function(request, response){
    counter++
    response.send(`count:${counter}`);
});
app.post('/decrement', function(request, response){
    counter--
    response.send(`count:${counter}`);
});

app.get('/value', function(request, response){
    response.send(`count:${counter}`);
    response.end();
});
app.listen(port);