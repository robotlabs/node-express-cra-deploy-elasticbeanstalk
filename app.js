// var AWS = require('aws-sdk');
// var express = require('express');
// var bodyParser = require('body-parser');

// AWS.config.region = process.env.REGION
// var app = express();

// // app.set('view engine', 'ejs');
// // app.set('views', __dirname + '/views');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hi, I am from ::BE: ' + Math.floor(Math.random() * 100) });
// });

// app.get('/', function(req, res) {
//     res.render('index', {
//         static_path: 'static',
//         theme: process.env.THEME || 'flatly',
//         flask_debug: process.env.FLASK_DEBUG || 'false'
//     });
// });


// var port = process.env.PORT || 5000;

// var server = app.listen(port, function () {
//     console.log('Server running at http://127.0.0.1:' + port + '/');
// });


const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hi, Ciao io sono Bellissimo: ' + Math.floor(Math.random() * 100) });
});
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});



    // if (process.env.NODE_ENV === 'production') {
    //     // Serve any static files
    //     app.use(express.static(path.join(__dirname, 'client/build')));
    //     // Handle React routing, return all requests to React app
    //     app.get('*', function(req, res) {
    //       res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    //     });
    //   }