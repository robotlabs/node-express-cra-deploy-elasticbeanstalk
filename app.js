const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hi, Ciao io sono Bellissimo: ' + Math.floor(Math.random() * 100) });
});
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});