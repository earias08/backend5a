import Producto from '../models/producto';

// creo un objeto vacio que tendra la logica del backend
const cafeteriaCtrl = {};

cafeteriaCtrl.getPrueba = (req, res)=>{
    res.send('prueba desde el controlador')
}

cafeteriaCtrl.crearProducto =async(req, res)=>{
    console.log(req.body);
    try{
        const {nombreProducto, precioProducto, categoria} = req.body
        // validar los datos
        // crear un objeto en la BD
        const productoNuevo = new Producto({
            nombreProducto: nombreProducto,
            precioProducto: precioProducto,
            categoria: categoria
        });
        // guardar el nuevo producto
        await productoNuevo.save();
        // enviar la respuesta al frontend
        res.status(201).json({
            mensaje: 'Producto agregado a la BD'
        });
    }catch(error){
        console.log(error);
        // enviar codigo de error
        res.status(500).json({
            mensaje: 'Ocurrio un error al intentar guardar los datos'
        })
    }
}

export default cafeteriaCtrl;
