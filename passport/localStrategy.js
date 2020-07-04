const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../schemas/user');

module.exports = (passport) => {
    passport.use(new LocalStrategy({
            usernameField: "email",
            passwordField: "password",
        }, async (username,password,done) =>{
            // 로그인 전략 수행
            try {
                const exUSer = await User.findOne({
                    email: username
                });
                if(exUser){
                    const result = bcrypt.compare(password,exUser.password);
                    if(result) {
                        done(null,exUser);
                    } else {
                        done(null,false,{ message : "Incorrect password" });
                    }
                } else {
                    done(null,false, { message : "Incorrect email "});
                }
            } catch {
                console.error(error);
                done(error);
            }
        }));
}