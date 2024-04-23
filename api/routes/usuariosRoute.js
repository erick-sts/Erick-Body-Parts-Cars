import express from "express"
import { getUsers } from "../controllers/usuariosController.js";
import { insertUser } from "../controllers/usuariosController.js";
import { loginUser } from "../controllers/usuariosController.js";
import { getUsersByName } from "../controllers/usuariosController.js";

const router = express.Router();

// Rota para buscar usuários
router.get("/", getUsers);

// Rota para inserir usuário
router.post("/cadastrar", insertUser);

//rota de login
router.post("/login", loginUser);

//buscar so o nome
router.get("/nome/", getUsersByName);


export default router;