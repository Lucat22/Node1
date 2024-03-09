const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    res.send('Rota Principal')
})

router.get('/hello', function(req, res){
    res.send('Flamengooooo!')
})

router.get('/nome', function(req, res){
    res.send('Lucas Alves da Silva Moreira')
})

module.exports = router