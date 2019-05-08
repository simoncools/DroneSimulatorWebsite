var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var path = require('path');
var net = require('net');
var tcpClient = new net.Socket();

app.get('/', function (req, res) {
    //res.send(template); // <- Return the static template above
    res.sendFile(__dirname + '/');
});
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html'); // <- Return the static template above
});
app.get('/data.html', function (req, res) {
    res.sendFile(__dirname + '/data.html'); // <- Return the static template above
});
app.get('/maps.html', function (req, res) {
    res.sendFile(__dirname + '/maps.html'); // <- Return the static template above
});

app.get('/assets/css/main.css', function (req, res) {
    res.sendFile(__dirname + '/assets/css/main.css'); // <- Return the static template above
});
app.get('/assets/css/font-awesome.min.css', function (req, res) {
    res.sendFile(__dirname + '/assets/css/font-awesome.min.css'); // <- Return the static template above
});

app.get('/assets/js/jquery.min.js', function (req, res) {
    res.sendFile(__dirname + '/assets/js/jquery.min.js'); // <- Return the static template above
});
app.get('/assets/js/browser.min.js', function (req, res) {
    res.sendFile(__dirname + '/assets/js/browser.min.js'); // <- Return the static template above
});
app.get('/assets/js/breakpoints.min.js', function (req, res) {
    res.sendFile(__dirname + '/assets/js/breakpoints.min.js'); // <- Return the static template above
});
app.get('/assets/js/util.js', function (req, res) {
    res.sendFile(__dirname + '/assets/js/util.js'); // <- Return the static template above
});
app.get('/assets/js/main.js', function (req, res) {
    res.sendFile(__dirname + '/assets/js/main.js'); // <- Return the static template above
});

app.get('/assets/fonts/FontAwesome.otf', function (req, res) {
    res.sendFile(__dirname + '/assets/fonts/FontAwesome.otf'); // <- Return the static template above
});
app.get('/assets/fonts/fontawesome-webfont.eot', function (req, res) {
    res.sendFile(__dirname + '/assets/fonts/fontawesome-webfont.eot'); // <- Return the static template above
});
app.get('/assets/fonts/fontawesome-webfont.svg', function (req, res) {
    res.sendFile(__dirname + '/assets/fonts/fontawesome-webfont.svg'); // <- Return the static template above
});
app.get('/assets/fonts/fontawesome-webfont.ttf', function (req, res) {
    res.sendFile(__dirname + '/assets/fonts/fontawesome-webfont.ttf'); // <- Return the static template above
});
app.get('/assets/fonts/fontawesome-webfont.woff', function (req, res) {
    res.sendFile(__dirname + '/assets/fonts/fontawesome-webfont.woff'); // <- Return the static template above
});
app.get('/assets/fonts/fontawesome-webfont.woff2', function (req, res) {
    res.sendFile(__dirname + '/assets/fonts/fontawesome-webfont.woff2'); // <- Return the static template above
});

app.get('/images/banner.mp4', function (req, res) {
    res.sendFile(__dirname + '/images/banner.mp4'); // <- Return the static template above
});
app.get('/images/banner.jpg', function (req, res) {
    res.sendFile(__dirname + '/images/banner.jpg'); // <- Return the static template above
});
app.get('/images/bg.jpg', function (req, res) {
    res.sendFile(__dirname + '/assets/js/main.js'); // <- Return the static template above
});
app.get('/images/drone.png', function (req, res) {
    res.sendFile(__dirname + '/images/drone.png'); // <- Return the static template above
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




/*setInterval(function () {
    var msg = Math.random();
    sendData(msg);
    //tcpClient.write(msg)
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
client.connect(15556, '192.168.1.28', function() {
    console.log('Connected');
    client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
    console.log('Received: ' + data);
    if(data=='kill'){
        client.destroy(); // kill client after server's response
    }
});

client.on('close', function() {
    console.log('Connection closed');
});




/*
var net = require('net');
const server = net.createServer();
server.listen(7070,'127.0.0.1', () => {
    console.log('TCP Server is running on port ' + 7070 +'.');
});
let sockets = [];

server.on('connection', function(sock) {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    sockets.push(sock);
    sock.write("CONNECTED: " + sock.remoteAddress + ":" + sock.remotePort)
    sock.on('data', function(data) {
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        // Write the data back to all the connected, the client will receive it as data from the server
        sockets.forEach(function(sock, index, array) {
            sock.write(sock.remoteAddress + ':' + sock.remotePort + " said " + data + '\n');
        });
    });

    sock.on('close', function(data) {
        let index = sockets.findIndex(function(o) {
            return o.remoteAddress === sock.remoteAddress && o.remotePort === sock.remotePort;
        })
        if (index !== -1) sockets.splice(index, 1);
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });
});*/
