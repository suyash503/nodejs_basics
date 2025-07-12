const express = require('express');
const app = express();
const cors = require('cors');
const { menu, orders } = require('./data');

app.use(cors());
app.use(express.json());

app.get('/menu', (req, res) => {
    res.json(menu);
});

app.post('/order', (req, res) => {
    const { name, items } = req.body;

    if (!name || !items || !Array.isArray(items)) {
        return res.status(400).json({ error: "invalid order data" });
    }

    const order = {
        orderId: currentOrderId++,
        name,
        items,
        status: "Order placed"
    };

    orders.push(order);
    res.status(201).json({ orderId: order.orderId, status: order.status });
});
const PORT = 3000;

app.listen(PORT, () => console.log(`server running on ${PORT}`));

