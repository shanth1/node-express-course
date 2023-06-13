const express = require("express");
const { products, people } = require("./data");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
    const newProducts = products.map((product) => {
        const { id, type } = product;
        return { id, type };
    });

    res.json(newProducts);
});

app.get("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const singleProduct = products.find((product) => product.id === Number(id));
    console.log(singleProduct);

    if (!singleProduct) {
        return res.status(404).send("<h1>Not found</h1>");
    }
    res.json(singleProduct);
});

app.get("/api/products/:id/type/:count", (req, res) => {
    const { id, count } = req.params;
    const singleProduct = products.find((product) => product.id === Number(id));

    if (!singleProduct) {
        return res.status(404).send("<h1>Not found</h1>");
    }
    res.json({ type: singleProduct.type, count: count });
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
