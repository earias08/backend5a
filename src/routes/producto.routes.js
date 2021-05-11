import { Router } from "express";
import cafeteriaCtrl from "../controllers/producto.controllers";

// creo una instancia del Router
const router = Router();

// crear las rutas
// router.route('/').get(funcion con logica);
router
  .route("/")
  .get(cafeteriaCtrl.listarProductos)
  .post(cafeteriaCtrl.crearProducto);

router.route('/:id')
.delete(cafeteriaCtrl.eliminarProducto)
.get(cafeteriaCtrl.obtenerProducto)
.put(cafeteriaCtrl.editarProducto);

export default router;
