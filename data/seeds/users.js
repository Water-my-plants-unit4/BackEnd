exports.seed = async function(knex) {
    await knex('users').insert([
        {id: 1, username:'admin', phoneNumber: 1234577890, password:'testing'}
    ])
}