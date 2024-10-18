import con from "./connection.js";


export async function inserirServicos(servico) {
    const comando = `
        insert into tb_serviços (ds_corte, bt_sombrancelha, bt_progressiva, bt_hidratação, bt_luzes, ds_barba, vl_valor) 
					        values (?, ?, ?, ?, ?, ?, ?)
    `;
    
    let resposta = await con.query(comando, [servico.ds_corte, servico.bt_sombrancelha, servico.progressiva, servico.hidratação, servico.bt_luzes, servico.vl_valor])
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




export async function alterarServico(servico) {
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

    let resposta = await con.query(comando, [servico.ds_corte, servico.bt_sombrancelha, servico.progressiva, servico.hidratação, servico.bt_luzes, servico.ds_barba, servico.vl_valor])
    let info = resposta[0];

    return info.affectedRows;
}