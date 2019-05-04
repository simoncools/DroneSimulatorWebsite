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
app.get('/assets/js/main.js', function (req, res) {
    res.sendFile(__dirname + '/assets/js/main.js'); // <- Return the static template above
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

var io = require('socket.io-client');
var socket = io.connect('http://localhost:1337', {reconnect: true});

socket.on('connect', function(){console.log('Connected');});
socket.on('event', function(data){console.log(data);});
socket.on('disconnect', function(){console.log('disconnected');});
/*
tcpClient.setTimeout(1000 * 60 * 300);

tcpClient.allowHalfOpen = true;
tcpClient.keepalive(true,0);

        tcpClient.connect(1337, '127.0.0.1', function () {
            console.log('Connected');
            tcpClient.write('Hello, server! Love, Client.');
              tcpClient.write('2');
        });

    tcpClient.on('data', function (data) {
        console.log('Received: ' + data);
        //sendData(data)
    });

    tcpClient.on('close', function (haderror) {
        console.log('Connection closed');
        console.log('becaus of ' + haderror);
    });

    tcpClient.on('error', function (err) {
        console.log(err)
        tcpClient.destroy();
    });*/
