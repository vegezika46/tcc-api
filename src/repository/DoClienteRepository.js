import con from "./connection.js";


export async function inserirCliente(pessoa) {
    const comando = `
        insert into tb_area_cliente (nm_nome_cliente, ds_cep, ds_rua, ds_bairro, nr_numero, ds_email) 
					        values (?, ?, ?, ?, ?, ?)
    `;
    
    let resposta = await con.query(comando, [pessoa.nm_nome_cliente, pessoa.ds_cep, pessoa.ds_rua, pessoa.ds_bairro, pessoa.nr_numero, pessoa.ds_email])
    let info = resposta[0];
    
    return info.insertId;
}
