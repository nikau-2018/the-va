exports.up = knex =>
  knex.schema.createTable('replies', t => {
    t.increments('id').primary()
    t.integer('post_id').references('posts.id')
    t.integer('user_id').references('users.id')
    t.string('display_name')
    t.string('text')
    t.integer('upvotes')
    t.integer('downvotes')
    t.boolean('reported')
    t.string('created_at')
  })

exports.down = knex => knex.schema.dropTable('replies')
