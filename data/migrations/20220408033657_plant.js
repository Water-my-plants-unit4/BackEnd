
exports.up = function(knex) {
    return knex.schema.createTable('plants', table => {
        table.increments('id')
        table.text('nickname').notNullable()
        table.text('species').notNullable()
        table.text('h2oFrequency').notNullable()
        table.integer('users——id')
            .unsigned()
            .notNullable()
            .references('id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

    })
};


exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('plants')
};
