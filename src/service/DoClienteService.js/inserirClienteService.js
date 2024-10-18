import { buscarClientePorId } from "../../repository/DoClienteRepository.js";


export default async function buscarClientePorId(id) { 
    let cliente = await buscarClientePorId(id)
    return cliente;
}