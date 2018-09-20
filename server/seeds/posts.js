
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, user_id: 1000, display_name: 'Curious Capybara', title: 'CC Post 1', body: 'CC Post 1 Body Content', upvotes: 0, downvotes: 0, reported: false, created_at: Date.now()},
        {id: 2, user_id: 1001, display_name: 'Wobbly Wombat', title: 'WW Post 1', body: 'WW Post 1 Body Content', upvotes: 0, downvotes: 0, reported: false, created_at: Date.now()},
        {id: 3, user_id: 1001, display_name: 'Wobbly Wombat', title: 'WW Post 2', body: 'WW Post 2 Body Content', upvotes: 0, downvotes: 0, reported: false, created_at: Date.now()}
      ]);
    });
};
