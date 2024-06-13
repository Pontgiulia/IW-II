const Sequileze = require('sequelize')
const sequileze = new Sequileze('test','root','',{
    host:'localhost',
    dialect:'mysql'
})

// sequileze.authenticate().then(function(){
//     console.log('Tudo funcionando (:')
// }).catch(function(erro){
//     console.log('Não tá funcionando porque: ' + erro)
// })

const Postagem = sequileze.define('postagens',{
    titulo:{
        type:Sequileze.STRING
    },
    conteudo:{
        type:Sequileze.TEXT
    }
})

const Usuario = sequileze.define('usuarios',{
    nome:{
         type:Sequileze.STRING
    },
    sobrenome:{
        type:Sequileze.STRING
    },
    email:{
    type:Sequileze.STRING
    },
    Idade:{
        type:Sequileze.INTEGER
   }
})

// Postagem.sync(force=true)
// Usuario.sync(force=true)

// Postagem.create({
//     titulo: 'Winxs',
//     conteudo: 'Sei que você vai querer ser uma de nós! Winx, Quando damos nossas mãos nos tornamos poderosas, porque juntas somos invencíveis'
// })