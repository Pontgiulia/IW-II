const express = require ("express")
const app = express()
const handlebars = require('express-handlebars')
const Sequileze = require('sequelize')
//config
    //Template engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')


    //conexão bd
    const sequileze = new Sequileze('test','root','',{
    host:'localhost',
    dialect:'mysql'
    })

//rotas
app.get('/cadastro', function(req,res){
    res.render('Formulario')
})

app.post('/add', function(req,res){
    res.send('Formulario recebido')
})


app.listen(8081, function(){
    console.log('Servidor rodando em http://localhost:8081')
})