const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./passport');

// .env
require('dotenv').config();

// router
const indexRouter = require('./routes');
const postRouter = require('./routes/post');
const authRouter = require('./routes/auth');
// mongoose
//const connect = require('./schemas');

const app = express();
// connect();

// set
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
app.set('port',8001);

// middleware
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(cookieParser("COOKIESECRET"));
app.use(session({
    resave: false,
    secret: process.env.COOKIE_SECRET,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: false,
    }
}));

// passport
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

// router
app.use('/',indexRouter);
app.use('/post',postRouter);
app.use('/auth',authRouter);



// 실행
app.listen(app.get('port'),()=>{
    console.log(`${app.get('port')}번 포트에서 실행 중입니다.`);
});

