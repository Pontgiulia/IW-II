const express = require ("express")
const app = express()

app.get('/',function(req,res){
    res.sendFile(__dirname + '/paginas/index.html')
})

app.get('/Linha10',function(req,res){
    res.send('Be careful with your cellphone and wallet')
})

app.get('/Linha7',function(req,res){
    res.sendFile(__dirname + '/paginas/sobre.html')
})

app.get(404,function(req,res){
    res.send('Erro')
})

app.get('/cadastro/:nome/:idade',function(req,res){
    res.send('Olá seu nome é: ' + req.params.nome + '        Sua idade: '+req.params.idade)
    // res.send('Sua idade é: ' + req.params.idade)
    // res.send(req.params)
})

app.listen(8081, function(){
    console.log('Servidor rodando em http://localhost:8081')
})