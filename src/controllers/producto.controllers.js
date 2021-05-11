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

cafeteriaCtrl.listarProductos = async(req, res)=>{
    try{
        // obtener un arreglo con todos los documentos (productos)
        const arregloProductos = await Producto.find();
        res.status(200).json(arregloProductos);
    }catch(error){
        console.log(error)
        res.status(500).json({
            mensaje:'Error al obtener la lista de usuarios'
        })
    }
}

cafeteriaCtrl.eliminarProducto = async (req, res)=>{
    try{
        console.log(req.params.id)
        await Producto.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje:'el producto fue eliminado'
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            mensaje: 'no se pudo eliminar el producto'
        })
    }
}

cafeteriaCtrl.obtenerProducto = async(req, res)=>{
    try{
        // console.log(req.params.id);
        const productoBuscado = await Producto.findById(req.params.id);
        res.status(200).json(productoBuscado)
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'el producto solicitado no fue encontrado'
        })
    }
}

cafeteriaCtrl.editarProducto = async (req,res) =>{
    try{
        console.log(req.body);
        // validar
       await Producto.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            mensaje: 'el producto fue modificado'
        })
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'no se pudo actualizar el producto'
        });
    }
}

export default cafeteriaCtrl;
