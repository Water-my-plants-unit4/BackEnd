const db = require('../../data/db-config')

module.exports = {
    get, 
    getById,
    insert,
    update,
    remove,
};

function get() {
    return db('users')
}

function getById(id) {
    return db(users)
}

function insert(user) {
    const [id] = await db('users').insert(user);
    return db('users').where({ id }).first();
}