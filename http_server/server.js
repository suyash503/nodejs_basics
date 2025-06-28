const http = require('http');
const myServer = http.createServer((req, res) => {
    console.log("new rew rec ");
    res.sendDate("hello from server");
});

myServer.listen(8000, () => {
    console.log("server started"); //if server is working fine this msg will be displayed
})