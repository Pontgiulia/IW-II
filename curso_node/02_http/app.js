//selecionar o modulo http do node 
var http = require('http')

//abrir um servidor http
http.createServer(function(req,res){
    res.end('<b>oi 2C</b>, bem vindos ao servidor com node js')
}).listen(8081)

console.log('servidor rodando.....')