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



export async function consultarServicos() {
    const comando = `
        select id_trabalho        id,
               ds_corte           corte,
               bt_sombrancelha    sombrancelha,
               bt_progressiva     progressiva,
               bt_hidratação      hidratação,
               bt_luzes           luzes,
               ds_barba           barba,
               vl_valor           valor
          from tb_serviços
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}




export async function alterarServico(ServicosRepository) {
    const comando = `
         update id_trabalhos
            set ds_corte,
                bt_sombrancelha,
                bt_progressiva,
                bt_hidratação,
                bt_luzes,
                ds_barba,
                vl_valor
            where tb_serviços = ?;
    `

    let resposta = await con.query(comando, [DataHora.dt_hora, DataHora.dt_dia])
    let info = resposta[0];

    return info.affectedRows;
}