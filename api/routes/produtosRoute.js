import express from "express";
import { getProducts, insertProduct, deleteProduct, editProduct } from "../controllers/produtosController.js";

const router = express.Router();

// Rota para buscar produtos
router.get("/", getProducts);

// Rota para inserir produto
router.post("/cadastrar", insertProduct);

router.delete("/deletar/:id", deleteProduct);

// Rota para editar produto por ID
router.put("/editar/:id", editProduct);

export default router;
