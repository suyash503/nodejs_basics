const http = require('http');
const fs = require('fs');
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: new req received \n`;
    fs.appendFile("log.txt", log, (err, data) => {
        res.end("hello from server again");
    });
    console.log("new request received"); //ye part jitni br page 
    console.log(req.headers);           //refresh hoga utni br chalega {terminal me}
    res.end("hello from server");       //{page pr display hoga}
});

myServer.listen(8900, () => {
    console.log("server started"); //if server is working fine this msg will be displayed
})