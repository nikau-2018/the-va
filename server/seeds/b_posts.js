exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return knex('posts').insert([
        {id: 2000, user_id: 1000, display_name: 'pillow123', title: 'Church girl?', body: 'My whole family is churchy, but I just don’t think I have the same beliefs as them. I don’t know what to do', upvotes: 0, downvotes: 0, reported: false, created_at: Date.now()},
        {id: 2001, user_id: 1001, display_name: 'Tulip.cake', title: 'Over it', body: 'tired of being micromanaged. I should be able to do what I want and wear what I want without worrying about being judged by my family ', upvotes: 0, downvotes: 0, reported: false, created_at: Date.now()},
        {id: 2002, user_id: 1001, display_name: 'Tga', title: 'Ngatu!', body: 'Is there anywhere /anyone in akl that can teach me how to make ngatu?', upvotes: 0, downvotes: 0, reported: false, created_at: Date.now()}
      ])
    })
}
