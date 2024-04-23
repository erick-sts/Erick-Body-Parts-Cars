import express from "express"
import cors from "cors"
import usersRoutes from "./routes/usuariosRoute.js"
import produtosRoutes from "./routes/produtosRoute.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/usuarios", usersRoutes)
app.use("/produtos", produtosRoutes)


const port = 8800; 
app.listen(port, () => {
  console.log(`💻 Servidor rodando na porta ${port} 🚀`);
});