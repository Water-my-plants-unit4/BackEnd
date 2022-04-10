exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.increments('users_id')
      table.text('username', 128).unique().notNullable()
      table.text('password', 128).unique().notNullable()
      table.text('phoneNumber', 128).unique().notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
