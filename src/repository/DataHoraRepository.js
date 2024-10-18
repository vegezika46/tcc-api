import con from "./connection.js";

export async function inserirDataHora(DataHora) {
    const comando = `
        insert into tb_data_hora (dt_hora, dt_dia) 
					        values (?, ?)
    `;
    
    let resposta = await con.query(comando, [DataHora.dt_hora, DataHora.dt_dia])
    let info = resposta[0];
    
    return info.insertId;
}


export async function consultarDataHora() {
    const comando = `
        select * 
               dt_hora      hora,
               dt_dia       dia
            from tb_data_hora
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}




export async function alterarDataHora(DataHoraRepository) {
    const comando = `
         update tb_data_hora
            set dt_hora,
                dt_dia
            where tb_data_hora = ?;
    `

    let resposta = await con.query(comando, [DataHora.dt_hora, DataHora.dt_dia])
    let info = resposta[0];

    return info.affectedRows;
}