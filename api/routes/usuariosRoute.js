import express from "express"
import { getUsers } from "../controllers/usuariosController.js";
import { insertUser } from "../controllers/usuariosController.js";

const router = express.Router();

// Rota para buscar usuários
router.get("/", getUsers);

// Rota para inserir usuário
router.post("/insert", insertUser);

export default router;