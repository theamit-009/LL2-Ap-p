var express = require('express');
var router = express.Router();
const {Pool, Client} = require('pg');
var passport = require('../config/passport');

require('../config/auth');
const pool = require('../db/postgresConfig');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/login',function(request,response){
  response.render('login');
});

router.get('/dashboard',function(request,response){
  response.render('dashboard');
});


router.post('/login', passport.authenticate('local', 
{ failureRedirect: '/users/login',
  successRedirect: '/users/dashboard',
}),function(request,response){
  
  const {email,password} = request.body;
  console.log('email: '+email+'password : '+password);

  pool.query('SELECT Id,Name FROM salesforce.Contact',(error,result)=>{
    if(error){
      console.log('error');
    }
    console.log('Result Records '+JSON.stringify(result.rows));
  })

  /* const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:true,
  });
  pool.on('error',function(err){
    console.log('Error Message: '+err.message);
    console.log('Error stack: '+err.stack);
  });

  pool.query('SELECT Id,Name FROM salesforce.Contact',(error,result)=>{
    if(error){
      console.log('error');
    }
    console.log('Result Records '+JSON.stringify(result.rows));
  }); */

  response.send('Dashboard Contsruction is under process !');
});



module.exports = router;
