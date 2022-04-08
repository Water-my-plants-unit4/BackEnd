const db = require('../../data/db-config')

async function add(user) {
    const [id] = await db('users').insert(user);
    return findById(id);
}

function find() {
    return db('users')
}

function findBy(filter) {
    return db('users').where(filter)
}

function findById(id) {
    return db('users')
        .select('id', 'username')
        .where({ id })
        .first()
}
function update(changes, id) {
    return db('users')
    .update(changes)
    .where({ id })
}

module.exports = {
    add,
    find,
    findBy,
    findById,
    update
}
