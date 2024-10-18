import { inserirCliente } from "../repository/DoClienteRepository.js";
import { consultarCliente } from "../repository/DoClienteRepository.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post('/clientes', async (req, resp) => {
    let clienteObj = req.body;

    let id = await inserirCliente(clienteObj);

    resp.send({
        id: id
    })
})


endpoints.get('/consulta/clientes/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        
        let cliente = await buscarClientePorId(id);
        resp.status(200).json(cliente);
        
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
});

export default endpoints;