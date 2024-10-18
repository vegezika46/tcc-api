import { inserirDataHora } from "../repository/DataHoraRepository";

import { Router } from "express";
const endpoints = Router();

endpoints.post('/marcardata', async (req, resp) => {
    let DataHora = req.body;

    let id = await inserirDataHora(DataHora);

    resp.send({
        id: id
    })
})