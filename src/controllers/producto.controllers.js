// creo un objeto vacio que tendra la logica del backend
const cafeteriaCtrl = {};

cafeteriaCtrl.getPrueba = (req, res)=>{
    res.send('prueba desde el controlador')
}

cafeteriaCtrl.crearProducto =(req, res)=>{
    console.log(req.body);
    res.send('desde crearProducto controller')
}

export default cafeteriaCtrl;
