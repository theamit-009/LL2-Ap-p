const Pool = require('pg');
const LocalStrategy = require('passport-local').Strategy

module.exports = (passport, db) => {
	passport.use(new LocalStrategy((username, password, cb) => {
    console.log('Passport Username '+username);
    console.log('Passport password '+password);
	}))

	passport.serializeUser((user, done) => {
		done(null, user)
	})

	passport.deserializeUser((id, cb) => {
    done(null, user)
	})
}
