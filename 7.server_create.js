const http = require('http');


http.createServer(function(req,res){
    res.write('welcome to node js')
    res.end()
}).listen(3000,()=>console.log("server is running localhost:3000"))