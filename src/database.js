import mongoose from 'mongoose';

// const url='mongodb://localhost:27017/cafeteria5a';
const url='mongodb+srv://emilse:emilse123@cluster0.4oulm.mongodb.net/cafeteria5a';

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true});

// guardar la conexion en una variable

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('BD conectada');
})