const mongoose = require('mongoose');

module.exports = () => {
    const connect = () => {
        if(process.env.NODE_ENV!=='production'){
            mongoose.set('debug',true);
        }
        mongoose.connect(`mongodb://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:27017/admin`,{
            dbName: 'groupcode'
        },(error)=>{
            if(error){
                console.log('mongodb connection error',error);
            } else {
                console.log('mongodb connection success');
            }
        });
    };
    connect();  // 몽고 디비 연결
    mongoose.connection.on('error',(error)=>{
        console.log('mongodb connection error');
    });
    mongoose.connection.on('disconnected',()=>{
        console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도 합니다.');
        connect();
    });
    // 스키마 연결
    require('./user');
    require('./comment');
    
};