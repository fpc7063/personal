const path = require('path')


const env = process.env.NODE_ENV


console.log("[DEBUG]: Initializing database connections on ENV:", env)
var pg
if (process.env.DB_HOST){
    pg = {
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        },
        seeds: {
            directory: path.resolve(__dirname, 'src', 'database', 'seeds')
        }
    }
} else {
    pg = {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            user: 'development',
            password: 'development',
            database: 'dev'
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        },
        seeds: {
            directory: path.resolve(__dirname, 'src', 'database', 'seeds')
        }
    }
}

module.exports = pg