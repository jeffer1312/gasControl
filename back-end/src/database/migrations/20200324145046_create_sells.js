exports.up = function(knex) {
    return knex.schema.createTable('sells', function(table) {
        table.increments();

        //data de criação e vencimento
        table.date('vencimento')
        table.timestamp('created_at').defaultTo(knex.fn.now());

        table.decimal('value').notNullable();

        //referencia
        table.string('client_id').notNullable();

        //chave estrangeira

        table.foreign('client_id').references('id').inTable('clients')


    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('sells');
};