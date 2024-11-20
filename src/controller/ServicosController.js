import { inserirServicos } from "../repository/ServicosRepository.js";
import { consultarServicos } from "../repository/ServicosRepository.js";
import { alterarServico } from "../repository/ServicosRepository.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post('/clientes/inserir', async (req, resp) => {
    let clienteObj = req.body;

    let id = await inserirServicos(clienteObj);

    resp.send({
        id: id
    })
})

endpoints.get('/clientes/consultar', async (req, resp) => {
    let clienteObj = req.body;

    let id = await consultarServicos(clienteObj);

    resp.send({
        id: id
    })
})

endpoints.put('/clientes/alterar', async (req, resp) => {
    let clienteObj = req.body;

    let id = await alterarServico(servicos);

    resp.send({
        id: id
    })
})

export default endpoints;