import { inserirDataHora } from "./repository/DataHoraRepository.js";
import { inserirCliente } from "./repository/DoClienteRepository.js";
import { inserirServicos } from "./repository/ServicosRepository.js";


export default function adicionarRotas(servidor) {
    servidor.use(inserirDataHora, inserirCliente, inserirServicos);
}