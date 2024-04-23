import { db } from "../db.js";

export const getProducts = (_, res) => {
    const selectProducts = "SELECT * FROM produtos";

    db.query(selectProducts, (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
}

export const insertProduct = (req, res) => {
    const { nome_peca, aplicacao, valor, quantidade } = req.body;
    const insertProductQuery = "INSERT INTO produtos (nome_peca, aplicacao, valor, quantidade) VALUES (?, ?, ?, ?)";

    db.query(insertProductQuery, [nome_peca, aplicacao, valor, quantidade], (err, result) => {
        if (err) return res.status(500).json(err);

        return res.status(201).json({ message: "Produto inserido com sucesso!", newProduct: { id: result.insertId, nome_peca, aplicacao, valor, quantidade } });
    });
}
