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