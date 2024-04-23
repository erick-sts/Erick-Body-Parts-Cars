import express from "express";
import { getProducts, insertProduct } from "../controllers/produtosController.js";

const router = express.Router();

// Rota para buscar produtos
router.get("/", getProducts);

// Rota para inserir produto
router.post("/insert", insertProduct);

export default router;
