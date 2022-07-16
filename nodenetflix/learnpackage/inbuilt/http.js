let http = require('http');

//req > what we send to server(params,queryParams,form)
//res > what server will respond

let server = http.createServer((req,res) => {
    res.write('<h1>Netflix node js application server</h1>');
    res.end()
})

server.listen(6780)