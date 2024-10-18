import { inserirDataHora } from "./repository/DataHoraRepository";
import { inserirCliente } from "./repository/DoClienteRepository";
import { inserirServicos } from "./repository/ServicosRepository";


export default function adicionarRotas(servidor) {
    servidor.use(inserirDataHora, inserirCliente, inserirServicos);
}