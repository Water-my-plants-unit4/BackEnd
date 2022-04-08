exports.seed = async function(knex) {
    await knex('plant').insert([
        {nickname: 'fire', species: 'rose', h2oFrequency: '1 per day', user_id: 1}
    ])
}