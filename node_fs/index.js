const http = require("http")
const server = http.createServer((req, res) => {
  /*  res.writeHead(200, {"content-type": "text/plain"});
    res.end("Welcome to TechCrush Backend Server")*/
    //Handling Request
    if(req.url === "/"){
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify({message: "Home route"}));
    }else if(req.url === "/students"){
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify([
            {name: "John", score: 85},
            {name: "Jane", score: 92},
            {name: "Bob", score: 78}
        ]));
    }else{
        res.writeHead(404, {"content-type": "application/json"});
        res.end(JSON.stringify({error: "Route not found"}));
    }
})

server.listen(3000, ()=> {
    console.log(`server is running at localhost 3000`)
})