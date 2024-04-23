import { db } from "../db.js";

export const getProducts = (_, res) => {
    const selectProducts = "SELECT * FROM produtos";

    db.query(selectProducts, (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
}

export const insertProduct = (req, res) => {
    const { nome_peca, aplicacao, quantidade, valor } = req.body;
    console.log(req.body)
    const insertProductQuery = "INSERT INTO produtos (nome_peca, aplicacao, quantidade, valor) VALUES (?, ?, ?, ?)";

    db.query(insertProductQuery, [nome_peca, aplicacao, quantidade, valor], (err, result) => {
        if (err) return res.status(500).json(err);

        return res.status(201).json({ message: "Produto inserido com sucesso!", newProduct: { id: result.insertId, nome_peca, aplicacao, quantidade, valor } });
    });
}


export const deleteProduct = (req, res) => {
    const productId = req.params.id;

    const deleteProductQuery = "DELETE FROM produtos WHERE id = ?";

    db.query(deleteProductQuery, [productId], (err, result) => {
        if (err) return res.status(500).json(err);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Produto não encontrado." });
        }

        return res.status(200).json({ message: "Produto deletado com sucesso!", deletedProductId: productId });
    });
}

export const editProduct = (req, res) => {
    const productId = req.params.id;
    const { nome_peca, aplicacao, quantidade, valor } = req.body;
    console.log(req.body)
    const updateProductQuery = "UPDATE produtos SET nome_peca = ?, aplicacao = ?, quantidade = ?, valor = ? WHERE id = ?";

    db.query(updateProductQuery, [nome_peca, aplicacao, quantidade, valor, productId], (err, result) => {
        if (err) return res.status(500).json(err);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Produto não encontrado." });
        }

        return res.status(200).json({ message: "Produto atualizado com sucesso!" });
    });
};
