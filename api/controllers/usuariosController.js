import { db } from "../db.js";
import bcrypt from "bcrypt";

export const getUsers = (_, res) => {
    const selectUsers = "SELECT * FROM usuarios";

    db.query(selectUsers, (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
}

export const insertUser = async (req, res) => {
    const { nome, email, senha } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10);
    const insertUserQuery = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";

    db.query(insertUserQuery, [nome, email, hashedPassword], (err, result) => {
        if (err) return res.status(500).json(err);

        return res.status(201).json({ message: "Usuário inserido com sucesso!", newUser: { id: result.insertId, nome, email } });
    });
}

export const loginUser = (req, res) => {
    const { email, senha } = req.body;
    const selectUserQuery = "SELECT * FROM usuarios WHERE email = ?";

    db.query(selectUserQuery, [email], async (err, result) => {
        if (err) return res.status(500).json(err);

        if (result.length === 0) {
            return res.status(401).json({ message: "Email ou senha incorretos" });
        }

        const user = result[0];
        const passwordMatch = await bcrypt.compare(senha, user.senha);

        if (!passwordMatch) {
            return res.status(401).json({ message: "Email ou senha incorretos" });
        }

        return res.status(200).json({ message: "Login bem-sucedido", user });
    });
};

export const getUsersByName = (req, res) => {
    const { nome } = req.params;
    const selectUserByName = "SELECT * FROM usuarios WHERE nome = ?";

    db.query(selectUserByName, [nome], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
}
