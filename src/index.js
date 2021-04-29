import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

// settings
// creo una instancia de express;
const app = express();

// const port = 4000;
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port') ,()=>{
    // console.log(path.join(__dirname,'../public'))
    console.log('Estoy en el puerto ' + app.get('port'));
});

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// agregaro la carpeta public como estatica
app.use(express.static(path.join(__dirname,'../public')))

// crear una ruta
app.get('/',(req,res)=>{
    res.send('Hola desde el servidor de backend');
});

