//still needs a db to import
//const db = require('../data/')

module.exports = {
    findById,
    add,
    update,
    remove,
    find,
  }
  
  function find() {
    return db('plants as p')
  }
  function findById(id) {
    return db("plants as p").where({ id }).first()
  }
  
  function add(plant) {
    return db("plants as p").insert(plant)
  }
  function update(change, id) {
    return db("plants as p").where({ id }).update(change)
  }
  function remove(id) {
    return db("plants as p").where({ id }).del()
  }