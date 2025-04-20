import { Router } from "express";

import {
  getProducts,
  getProductsById,
  insertProduct,
  deleteProductById,
  getTotalProducts,
  updateProductById,
} from "../controller/productscontroller";

const router = Router();
//ruta para obtener todos los productos
router.get("/products", getProducts);
//ruta para insertar un nuevo producto
router.post("/products", insertProduct);
//ruta para obtener el total de los productos
router.get("/products/count", getTotalProducts);
//ruta para obtener un producto
router.get("/products/:id", getProductsById);
//ruta para borrar un producto
router.delete("/products/:id", deleteProductById);
//ruta para actualizar un producto
router.put("/products/:id", updateProductById);

export default router;
