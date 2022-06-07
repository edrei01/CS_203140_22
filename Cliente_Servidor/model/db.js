const { Pool } = require('pg');
//const { getConnection } = require('');

const config = require('../config.js');


async function getConnection(){
    const client = new Pool({
        user: config.db.user,
        host: config.db.host,
        database: config.db.database,
        password: config.db.password,
        port: config.db.port
    });
    await client.connect();
    return client;
}

module.exports = {getConnection};