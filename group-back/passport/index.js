const localStrategy = require('./localStrategy');
const User = require('../schemas/user');

module.exports = (passport) => {
    passport.serializeUser((user,done)=>{
        done(null,user);
    });
    passport.deserializeUser((id,done)=>{
        User.findOne({
            email: id
        })
        .then(user=>done(null,user))
        .catch(err=>done(err));
    });
    localStrategy(passport);
};
