const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './meubanco.db'
    },
    useNullAsDefault: true
});

knex.schema.createTable('usuarios', (table) => {
    table.increments('id');
    table.string('nome');
    table.string('email');
    table.string('senha');
}).then(() => console.log("Tabela criada"));

knex('usuarios').insert({
  nome: 'João Silva',
  email: 'joao@email.com',
  senha: '123456'
}).then(() => console.log("Usuário inserido"));