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



export async function consultarCliente() {
    const comando = `
        select id_pessoa            id,
               nm_pessoa_cliente    nome,
               ds_cep               cep,
               ds_rua               rua,
               ds_bairro            bairro,
               nr_numero            numero,
               ds_email             email
          from tb_area_cliente
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}