exports.up = knex =>
  knex.schema.createTable('users', t => {
    t.increments('id').primary()
    t.string('username').unique()
    t.string('password_hash')
    t.integer('role')
  })

exports.down = knex => knex.schema.dropTable('users')
