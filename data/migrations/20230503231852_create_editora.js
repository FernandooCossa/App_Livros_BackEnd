/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('editoras', (table)=> {
      table.increments();
      table.string("nome",80).notNullable();
      table.string("cidade",60).notNullable();
      table.string("estado",60).notNullable();
      table.number("telefone",20).notNullable();
      table.string("rua",60).notNullable();
      table.integer("cep",20).notNullable();
    });
};
exports.down = function(knex) {
  return knex.schema.dropTable("editoras");
};
