const express = require('express');
const app = express();

require('dotenv').config();

const plotly = require('plotly')(process.env.USERNAME, process.env.APIKEY)

app.get('/', (req, res) => {
    const data = [{x:[0,1,2], y:[3,2,1], type: 'bar'}];
    const layout = {fileopt : "overwrite", filename : "simple-node-example"};
    
    plotly.plot(data, layout, function (err, msg) {
        if (err) return console.log(err);
        console.log(msg);
    });
});


// {
//     streamstatus: undefined,
//     url: 'https://chart-studio.plotly.com/~MLAbram/0',
//     message: "High five! You successfully sent some data to your account on plotly. View your plot in your browser at https://chart-studio.plotly.com/~MLAbram/0 or inside your Plotly account where it is named 'simple-node-example'",
//     warning: '',
//     filename: 'simple-node-example',
//     error: ''
// }


module.exports = app;