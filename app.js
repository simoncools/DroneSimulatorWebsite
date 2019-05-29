var express = require('express');
var app = express();
var net = require('net');
var client = new net.Socket();
var connected = false;
app.get('/', function (req, res) {
    //res.send(template); // <- Return the static template above
    res.sendFile(__dirname + '/');
});
app.get('/index.html', function (req, res) {
    var index = req.params.index;
    res.sendFile(__dirname + '/index.html'); // <- Return the static template above
});

app.get('/data.html', function (req, res) {
    res.sendFile(__dirname + '/data.html'); // <- Return the static template above
});
app.get('/data3D.html', function (req, res) {
    res.sendFile(__dirname + '/data3D.html'); // <- Return the static template above
});
app.get('/maps.html', function (req, res) {
    res.sendFile(__dirname + '/maps.html'); // <- Return the static template above
});

app.get('/replay/:option', function (req, res) {
    console.log("replay called");
    if (connected) {
        client2.write("replay\n");
        console.log("start replay");
    }
    res.send('Lol yeet');
});


app.get('/assets/css/main.css', function (req, res) {
    res.sendFile(__dirname + '/assets/css/main.css'); // <- Return the static template above
});
app.get('/assets/css/font-awesome.min.css', function (req, res) {
    res.sendFile(__dirname + '/assets/css/font-awesome.min.css'); // <- Return the static template above
});

app.get('/assets/DroneKeychain_.stl', function (req, res) {
    res.sendFile(__dirname + '/assets/DroneKeychain_.stl'); // <- Return the static template above
});

app.get('/stl_viewer.min.js', function (req, res) {
    res.sendFile(__dirname + '/stl_viewer.min.js'); // <- Return the static template above
});
app.get('/three_viewer.min.js', function (req, res) {
    res.sendFile(__dirname + '/three_viewer.min.js'); // <- Return the static template above
});
app.get('/three.min.js', function (req, res) {
    res.sendFile(__dirname + '/three.min.js'); // <- Return the static template above
});
app.get('/webgl_detector.js', function (req, res) {
    res.sendFile(__dirname + '/webgl_detector.js'); // <- Return the static template above
});
app.get('/Projector.js', function (req, res) {
    res.sendFile(__dirname + '/Projector.js'); // <- Return the static template above
});
app.get('/parser.min.js', function (req, res) {
    res.sendFile(__dirname + '/parser.min.js'); // <- Return the static template above
});
app.get('/CanvasRenderer.js', function (req, res) {
    res.sendFile(__dirname + '/CanvasRenderer.js'); // <- Return the static template above
});
app.get('/OrbitControls.js', function (req, res) {
    res.sendFile(__dirname + '/OrbitControls.js'); // <- Return the static template above
});
app.get('/load_stl.min.js', function (req, res) {
    res.sendFile(__dirname + '/load_stl.min.js'); // <- Return the static template above
});
app.get('/leaflet/:index', function (req, res) {
    var index = req.params.index;
    res.sendFile(__dirname + '/leaflet/'+index); // <- Return the static template above
});
app.get('/leaflet/images/:index', function (req, res) {
    var index = req.params.index;
    res.sendFile(__dirname + '/leaflet/images/'+index); // <- Return the static template above
});

app.get('/4uMaps/:z/:x/:y',function (req,res) {
    var x = req.params.x;
    var y = req.params.y;
    var z = req.params.z;
    res.sendFile(__dirname + '/4uMaps/'+z+'/'+x+'/'+y); // <- Return the static template above
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
app.get('/assets/js/index.js', function (req, res) {
    res.sendFile(__dirname + '/assets/js/index.js'); // <- Return the static template above
});
app.get('/node_modules/styled-components/dist/styled-components.js', function (req, res) {
    res.sendFile(__dirname + '/node_modules/styled-components/dist/styled-components.js'); // <- Return the static template above
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
app.get('/images/droneFront.png', function (req, res) {
    res.sendFile(__dirname + '/images/droneFront.png'); // <- Return the static template above
});
app.get('/images/droneSide.png', function (req, res) {
    res.sendFile(__dirname + '/images/droneSide.png'); // <- Return the static template above
});
app.get('/images/droneTop.png', function (req, res) {
    res.sendFile(__dirname + '/images/droneTop.png'); // <- Return the static template above
});
app.get('/images/drone3D.png', function (req, res) {
    res.sendFile(__dirname + '/images/drone3D.png'); // <- Return the static template above
});
app.get('/images/drone3D.jpg', function (req, res) {
    res.sendFile(__dirname + '/images/drone3D.jpg'); // <- Return the static template above
});
app.get('/images/frame.png', function (req, res) {
    res.sendFile(__dirname + '/images/frame.png'); // <- Return the static template above
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
    sendData(msg+" "+msg1 +" 100 70 60 50 0 0");
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
    //connected = true;
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
    //connected = false;
    setTimeout(tryConnect,5000);
});

client.on('error', function(e) {
    console.log('Cannot connect to server');
});

var client2 = new net.Socket();

function tryConnect2(){
    client2.connect(1338, '127.0.0.1');
}

client2.on('connect', function(){
    connected = true;
    console.log('Connected');
});

tryConnect2();

client2.on('data', function(data) {
    if(data=='kill'){
        clien2.destroy(); // kill client after server's response
    }
    console.log("Sending response")
    client2.write('k\n');
});

client2.on('close', function() {
    console.log('Retrying to connect');
    connected = false;
    setTimeout(tryConnect2,5000);
});

client2.on('error', function(e) {
    console.log('Cannot connect to server');
});
