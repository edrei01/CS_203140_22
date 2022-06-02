module.exports = {
    api:{
        port: process.env.API_PORT || 3001,
    },
    db:{
        user: 'postgres',
        host: 'localhost',
        database: 'CSDB',
        password: 'edrei01.',
        port: '5432'
    }
}