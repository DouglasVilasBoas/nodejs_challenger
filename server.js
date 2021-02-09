const express = require('express');
const routes = require('./config/routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, (error) => {
    if(error){
        console.error(error);
    }
    console.log('Server Started!');
});