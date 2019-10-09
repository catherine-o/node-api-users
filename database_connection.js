const configuration = require('./knexfile')['development']
const db = require('knex')(configuration)

function getUsers(){
    return db('users')
}

function getUser(id){
    return db('users').where('id', id[0])
}

function createUser(name){
    return db('users').insert([
        {name}
    ]).returning('id')
}

function updateUser(name, id){
    return db('users').where('id', id).update('name', name).returning("name")
}

function deleteUser(id){
    return db('users').where('id', id).del().returning("id")
}


module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}
