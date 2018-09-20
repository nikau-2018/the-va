
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('replies').del()
    .then(function () {
      // Inserts seed entries
      return knex('replies').insert([
        {id: 1, post_id: 2000, user_id: 1001, display_name: 'WW', text: 'WW reply to CC1', upvotes: 0, downvotes: 0, reported: false, created_at: Date.now()},
        {id: 2, post_id: 2002, user_id: 1000, display_name: 'CC', text: 'CC Reply to WW1 ', upvotes: 0, downvotes: 0, reported: false, created_at: Date.now()},
        {id: 3, post_id: 2002, user_id: 1001, display_name: 'Wobbly Wombat', text: 'WW Own reply to WW1', upvotes: 0, downvotes: 0, reported: false, created_at: Date.now()}
      ])
    })
}
