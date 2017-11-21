import http = require('http');
import fs = require('fs');
import usersController from './Server/usersController';

var port = process.env.port || 1337;


let a = new usersController();
let b = new usersController();

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const basePath = 'Client/';
    let file = req.url == "/" ? basePath+'index.html' : basePath + req.url;
    
    fs.createReadStream(file).pipe(res);
    
}).listen(port);