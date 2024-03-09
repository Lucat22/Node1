const express = require('express')
const router = express.Router()

router.post('/ex1', function(req, res){

    const n1 = Number(req.body.n1)
    const n2 = Number(req.body.n2)
    const n3 = Number(req.body.n3)
    const n4 = Number(req.body.n4)

    const media = (n1 + n2 + n3 + n4) / 4

    const mensagem = media >= 7 ? 'Aprovado' : 'Reprovado'

    res.json({media, mensagem})

})   

router.post('/ex2', function(req, res){

    const Total = Number(req.body.Total)
    const Brancos = Number(req.body.Brancos)
    const Nulos = Number(req.body.Nulos)
    const Validos = Number(req.body.Validos)

    const soma = Brancos + Nulos + Validos

    let retorno = {}
    if (soma > Total) {

        retorno = {
            codigo: 'SOMA_ELEITORES',
            mensagem: "A soma dos votos não pode passar o total de eleitores , MENGO!"
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

module.exports = router