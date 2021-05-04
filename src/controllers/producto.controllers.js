// creo un objeto vacio que tendra la logica del backend
const cafeteriaCtrl = {};

cafeteriaCtrl.getPrueba = (req, res)=>{
    res.send('prueba desde el controlador')
}

export default cafeteriaCtrl;
