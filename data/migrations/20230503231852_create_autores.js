/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('autores', (table)=> {
      table.increments();
      table.string("nome",80).notNullable();
      table.string("sobrenome",60).notNullable();
      table.integer("idade",4).notNullable();
      table.string("data_nascimento",10).notNullable();
      table.string("sexo",1).notNullable();
      table.string("telefone",20).notNullable();
    });
};
exports.down = function(knex) {
  return knex.schema.dropTable("autores");
};

