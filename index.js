const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', function(req, res){
    res.send('Rota Principal')
})

app.get('/hello', function(req, res){
    res.send('Chegou a resposta')
})

app.get('/nome', function(req, res){
    res.send('Lucas Alves da Silva Moreira')
})


app.post('/lista1/ex1', function(req, res){

    const Total = Number(req.body.Total)
    const Brancos = Number(req.body.Brancos)
    const Nulos = Number(req.body.Nulos)
    const Validos = Number(req.body.Validos)

    const soma = Brancos + Nulos + Validos

    let retorno = {}
    if (soma > Total) {

        retorno = {
            codigo: 'SOMA_ELEITORES',
            mensagem: "A soma dos votos não pode passar o total de eleitores , FLAMENGO!"
        }

        res.status(400).json(retorno)
        
    } else {


        const percB = Brancos / Total * 100
        const percN = Nulos / Total * 100
        const percV = Validos / Total * 100


        retorno = {percB, percN, percV}

        res.status(200).json(retorno)
    }


    res.send('Lista 1 --> Ex1')
    
})

app.listen(3000, function(){
    console.log('Server UP port 3000')
})