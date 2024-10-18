import con from "./connection.js";


export async function inserirServicos(Servico) {
    const comando = `
        insert into tb_serviços (ds_corte, bt_sombrancelha, bt_progressiva, bt_hidratação, bt_luzes, ds_barba, vl_valor) 
					        values (?, ?, ?, ?, ?, ?, ?)
    `;
    
    let resposta = await con.query(comando, [pessoa.nm_nome_cliente, pessoa.ds_cep, pessoa.ds_rua, pessoa.ds_bairro, pessoa.nr_numero, pessoa.ds_email])
    let info = resposta[0];
    
    return info.insertId;
}