exports.seed = knex =>
  knex('users').del()
    .then(() =>
      knex('users').insert([
        {id: 1, username: 'antelope'},
        {id: 2, username: 'bison'},
        {id: 3, username: 'caribou'},
        {id: 3, username: 'deer'},
        {id: 3, username: 'elk'}
      ])
    )
