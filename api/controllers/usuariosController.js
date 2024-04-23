import { db } from "../db.js";

export const getUsers = (_, res) => {
    const selectUsers = "SELECT * FROM usuarios";

    db.query(selectUsers, (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
}

export const insertUser = (req, res) => {
    const { nome, email, senha } = req.body;
    const insertUserQuery = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";

    db.query(insertUserQuery, [nome, email, senha], (err, result) => {
        if (err) return res.status(500).json(err);

        return res.status(201).json({ message: "Usuário inserido com sucesso!", newUser: { id: result.insertId, nome, email } });
    });
}
