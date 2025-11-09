const http = require ('http');

const server = http.createServer ((req, res) => {
    res.writehead (200, {'Content-Type': 'text/plain'});
    res.end('hello world!\n')
})

server.listen(3000, () => {
    console.log('Server running on port 3000')
});