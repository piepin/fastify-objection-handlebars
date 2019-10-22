require('dotenv').config();
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    },
    pool: {
        min: 0,
        max: 3
    } // Menggunakan fungsi pool agar menjaga koneksi ke DB tetep tersambung
});

module.exports = knex;

/*
===== Contoh menggunakan SQLite3

var knex = require('knex')({
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: process.env.DB_DATABASE
    }
});

===== Contoh menggunakan PostgreSQL

var knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    }
});

*/