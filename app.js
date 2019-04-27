var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var path = require('path');

var template =
    `<!DOCTYPE html> <html> <body>
	<script type="text/javascript">
		var source = new EventSource("/events/");
		source.onmessage = function(e) {
			document.body.innerHTML += e.data + "<br>";
		};
	</script>
</body> </html>`;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/'); // <- Return the static template above
});
app.get('/assets/css/main.css', function (req, res) {
    res.sendFile(__dirname + '/assets/css/main.css'); // <- Return the static template above
});
app.get('/assets/css/font-awesome.min.css', function (req, res) {
    res.sendFile(__dirname + '/assets/css/font-awesome.min.css'); // <- Return the static template above
});


app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html'); // <- Return the static template above

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

app.get('/images/banner.mp4', function (req, res) {
    res.sendFile(__dirname + '/images/banner.mp4'); // <- Return the static template above
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

setInterval(function () {
    var msg = Math.random();
    console.log("Clients: " + Object.keys(clients) + " <- " + msg);
    for (clientId in clients) {
        clients[clientId].write("data: " + msg + "\n\n"); // <- Push a message to a single attached client
    };
}, 2000);

app.listen(process.env.PORT || 8080);
