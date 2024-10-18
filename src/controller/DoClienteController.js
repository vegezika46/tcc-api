import { inserirCliente } from "../repository/DoClienteRepository.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post('/clientes', async (req, resp) => {
    let clienteObj = req.body;

    let id = await inserirCliente(clienteObj);

    resp.send({
        id:id
    })
})