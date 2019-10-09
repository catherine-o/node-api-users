
exports.up = function(knex) {
    return knex.schema.createTable('users', (t) => {
        t.increments('id')
        t.string('name')
    })
};

exports.down = function(knex) {
  
};
