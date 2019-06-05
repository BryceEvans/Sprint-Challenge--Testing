
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        { name: 'Pacman', genre: 'Arcade', releaseYear: 1980 }
      ]);
    });
};
