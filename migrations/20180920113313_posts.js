exports.up = knex =>
  knex.schema.createTable('posts', t => {
    t.increments('id').primary()
    t.integer('user_id').references('users.id')
    t.string('display_name')
    t.string('title')
    t.string('body')
    t.integer('upvotes')
    t.integer('downvotes')
    t.boolean('reported')
    t.timestamps(false, true)
  })

exports.down = knex => knex.schema.dropTable('posts')
