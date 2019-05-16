var express = require('express');
var app = express();
var net = require('net');
var client = new net.Socket();
var connected = false;
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/');
});
app.get('/:index', function (req, res) {
    var index = req.params.index;
    res.sendFile(__dirname + '/'+index);
});
app.get('/assets/:index', function (req, res) {
    var index = req.params.index;
    res.sendFile(__dirname + '/assets/'+index);
});
app.get('/assets/css/:index', function (req, res) {
    var index = req.params.index;
    res.sendFile(__dirname + '/assets/css/'+index);
});
app.get('/leaflet/:index', function (req, res) {
    var index = req.params.index;
    res.sendFile(__dirname + '/leaflet/'+index);
});
app.get('/leaflet/images/:index', function (req, res) {
    var index = req.params.index;
    res.sendFile(__dirname + '/leaflet/images/'+index);
});
app.get('/4uMaps/:z/:x/:y',function (req,res) {
    var x = req.params.x;
    var y = req.params.y;
    var z = req.params.z;
    res.sendFile(__dirname + '/4uMaps/'+z+'/'+x+'/'+y);
});
app.get('/assets/js/:index', function (req, res) {
    var index = req.params.index;
    res.sendFile(__dirname + '/assets/js/'+index);
});
app.get('/assets/fonts/:index', function (req, res) {
    var index = req.params.index;
    res.sendFile(__dirname + '/assets/fonts/'+index);
});
app.get('/images/:index', function (req, res) {
    var index = req.params.index;
    res.sendFile(__dirname + '/images/' + index);
});
app.get('/replay/:option', function (req, res) {
    console.log("replay called");
    if (connected) {
        client.write('replay/n');
        console.log("start replay");
    }
    res.send('Lol yeet');
});


var clientId = 0;
var clients = {}; // <- Keep a map of attached clients

// Called once for each new client. Note, this response is left open!
app.get('/events/', function (req, res) {
    req.socket.setTimeout(Number.MAX_VALUE);
    res.writeHead(200, {
        'Content-Type': 'text/event-stream', // <- Important headers
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });
    res.write('\n');
    (function (clientId) {
        clients[clientId] = res; // <- Add this client to those we consider "attached"
        req.on("close", function () {
            delete clients[clientId]
        }); // <- Remove this client when he disconnects
    })(++clientId)
});
/*
//to create dummy data
setInterval(function () {
    var msg = (Math.random()*50)-25;
    var msg1 = (Math.random()*50)-25;
    sendData(msg+" "+msg1 +" 100 200 300 400");
}, 2000);*/

function sendData(data){
    console.log("Clients: " + Object.keys(clients) + " <- " + data);
    for (clientId in clients) {
        clients[clientId].write("data: " + data + "\n\n"); // <- Push a message to a single attached client
    };
}

app.listen(process.env.PORT || 8080);

var net = require('net');

var client = new net.Socket();

function tryConnect(){
    client.connect(1337, '127.0.0.1');
}

client.on('connect', function(){
    connected = true;
    console.log('Connected');
});

tryConnect();

client.on('data', function(data) {
    sendData(data);
    if(data=='kill'){
        client.destroy(); // kill client after server's response
    }
    console.log("Sending response")
    client.write('k\n');
});

client.on('close', function() {
    console.log('Retrying to connect');
    connected = false;
    setTimeout(tryConnect,5000);
});

client.on('error', function(e) {
    console.log('Cannot connect to server');
});
