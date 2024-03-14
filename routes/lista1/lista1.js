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
    
});

router.post('/ex3', function(req, res){
    const salarioAtual = parseInt(req.body.custoFabricacao) || 0
    const percentualImposto = ((45 / 100) * custoFabricacao).toFixed(2)
    const percentualDistribuidor = ((28 / 100) * custoFabricacao).toFixed(2)
    const custoFinal = (custoFabricacao + parseFloat(percentualImposto) + parseFloat(percentualDistribuidor));

    res.status(200).json(
        {
            codigo: "VALOR_VENDA_VEICULO",
            mensagem: "Sucesso: Valor de venda do veículo.",
            valorFinalVeiculo: custoFinal
        }
    )
});

router.post('/ex04', function(req, res) {
    const custoFabricacao = parseInt(req.body.custoFabricacao) || 0
    const percentualImposto = ((45 / 100) * custoFabricacao).toFixed(2)
    const percentualDistribuidor = ((28 / 100) * custoFabricacao).toFixed(2)
    const custoFinal = (custoFabricacao + parseFloat(percentualImposto) + parseFloat(percentualDistribuidor));

    res.status(200).json(
        {
            codigo: "VALOR_VENDA_VEICULO",
            mensagem: "Sucesso: Valor de venda do veiculo.",
            valorFinalVeiculo: custoFinal,
        }
    )
});

router.post('/ex05', (req, res) => {
    const custoFabricacao = parseInt(req.body.custoFabricacao) || 0
    const percentualImposto = parseFloat(((parseInt(req.body.percentualImposto) || 0) / 100) * custoFabricacao)
    const percentualDistribuidor = parseFloat(((parseInt(req.body.percentualDistribuidor) || 0) / 100) * custoFabricacao)
    const custoFinal = (custoFabricacao + percentualImposto + percentualDistribuidor);

    res.status(200).json(
        {
            codigo: "VALOR_VENDA_VEICULO",
            mensagem: "Sucesso: Valor de venda do veiculo.",
            custoFabricacao: custoFabricacao,
            percentualImposto: percentualImposto,
            percentualDistribuidor: percentualDistribuidor,
            valorFinalVeiculo: custoFinal,

        }
    )
});

router.post('/ex06', (req, res) => {
    const carrosVendidos = parseInt(req.body.carrosVendidos) || 0
    const comissaoVendaCarros = parseInt(req.body.comissaoVendaCarros) || 0
    const valorTotalVendas = carrosVendidos * comissaoVendaCarros
    const salarioFuncionario = parseInt(req.body.salarioFuncionario) || 0
    const ValorCarroVendido = valorTotalVendas * 5 / 100;
    const salario = valorTotalVendas + salarioFuncionario + ValorCarroVendido

    res.status(200).json(
        {
            codigo: "VALOR_SALARIO_VENDEDOR",
            mensagem: "Sucesso: Valor final do vendedor.",
            salarioFinalVendedor: salario,
        }
    )
});

router.post('/ex07', (req, res) => {
    const nota1 = parseInt(req.body.valorNota1) || 0
    const nota2 = parseInt(req.body.valorNota2) || 0

    const pesoNota1 = 40 / 100;
    const pesoNota2 = 60 / 100;

    const media = (nota1 * pesoNota1 + nota2 * pesoNota2)

    res.status(200).json(
        {
            codigo: "MEDIA_NOTAS_ALUNO",
            mensagem: "Sucesso: Média das notas do aluno.",
            salarioFinalVendedor: media,
        }
    )
});

router.post('/ex08', (req, res) => {
    const pi = Math.PI /* Função chique */
    const raio = parseInt(req.body.valorRaio) || 0
    const altura = parseInt(req.body.valorAltura) || 0
    const volume = parseFloat(pi * (raio ** 2) * altura).toFixed(2)

    res.status(200).json(
        {
            codigo: "MEDIA_NOTAS_ALUNO",
            mensagem: "Sucesso: Volume da caixa",
            volumeCaixa: volume,
        }
    )
});

router.post('/ex09', (req, res) => {
    const num01 = parseInt(req.body.valor1) || 0
    const num02 = parseInt(req.body.valor2) || 0
    const resultado = (num01 + num02) * num01;

    res.status(200).json(
        {
            codigo: "MEDIA_NOTAS_ALUNO",
            mensagem: "Sucesso: Soma de dois números.",
            resultadoSoma: resultado,
        }
    )
});




module.exports = router