exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('replies').del()
    .then(function () {
      // Inserts seed entries
      return knex('replies').insert([
        {id: 3001, post_id: 2000, user_id: 1003, display_name: 'replier_disp', text: 'church reply', upvotes: 0, downvotes: 0, reported: false, created_at: Date.now()},
        {id: 3002, post_id: 2002, user_id: 1003, display_name: 'replier_disp', text: 'over it reply', upvotes: 0, downvotes: 0, reported: false, created_at: Date.now()},
        {id: 3003, post_id: 2002, user_id: 1003, display_name: 'replier_disp', text: 'ngatu reply', upvotes: 0, downvotes: 0, reported: false, created_at: Date.now()}
      ])
    })
}
