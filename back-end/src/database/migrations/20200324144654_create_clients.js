exports.up = function(knex) {
    return knex.schema.createTable('clients', function(table) {
        table.increments('id')
        table.string('name').notNullable();
        table.string('phone').notNullable();
        table.string('adress').notNullable();

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('clients');
};