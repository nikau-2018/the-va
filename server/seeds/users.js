
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1000, username: 'curiouscapybara_username', role: 0},
        {id: 1001, username: 'wobblywombat_username', role: 0},
        {id: 1002, username: 'dummyadmin', role: 1}
      ])
    })
}
