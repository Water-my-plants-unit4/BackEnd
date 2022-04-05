const commonConfig = {
    client: 'sqlite3',
    useNullAsDefault: null,
    migrations: {
        directory: './data/migrations'
    },
    seeds: {
        directory: './data/seeds'
    },
}

module.exports = {
    development: {
        connection: {
            filename: './data/user.db3'
        },
        ...commonConfig
    },
    production: {
        connection: {
            filename:'./data/prod-user.db3'
        },
        ...commonConfig
    }
}