const express = require('express');
const app = express();

require('dotenv').config();

const plotly = require('plotly')(process.env.USERNAME, process.env.APIKEY);

app.get('/', (req, res) => {
    const data = [{
        x: [0, 2, 4],
        y: [0, 4, 2],
        type: "scatter"
    }];
    
    const graphOptions = {filename: "privacy-false", world_readable: false, fileopt: "overwrite"};
    
    plotly.plot(data, graphOptions, function (err, msg) {
        console.log(msg);
    });
});





module.exports = app;