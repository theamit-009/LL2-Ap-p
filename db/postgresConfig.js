const {Pool,Client} = require('pg')

const dbConfig = {
    connectionString: 'postgres://u8h8jpi8foto89:p9c2346a13f098f33131dffec36db8578921ffc0845c1192a68d10f01c69c43ab@ec2-52-44-203-98.compute-1.amazonaws.com:5432/d1q83uqnhfop3q',
    ssl:true,
  }

//console.log('process.env.DATABASE_URL Hllo '+process.env.DATABASE_URL);

const pool = new Pool(dbConfig);
pool.on('error',function(err){
    console.log('Error Message'+err.message);
    console.log('Error Stack'+err.stack);
})

module.exports = {
    pool,
    query: (text, params, callback) =>{
        return pool.query(text, params, callback)
    }
}