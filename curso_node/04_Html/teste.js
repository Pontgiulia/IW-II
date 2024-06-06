const Sequileze = require('sequelize')
const sequileze = new Sequileze('test','root','',{
    host:'localhost',
    dialect:'mysql'
})

sequileze.authenticate().then(function(){
    console.log('Tudo funcionando (:')
}).catch(function(erro){
    console.log('Não tá funcionando porque: ' + erro)
})