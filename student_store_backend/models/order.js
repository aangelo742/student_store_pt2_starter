const db = require("../db")

class  Order {
    static async listOrdersForUser() {
        const results = await db.query(
            `
                SELECT o.id AS "orderId",
                       o.customer_id AS "customerId",
                       d.quantity AS "quantity",
                       p.name AS "name",
                       p.price AS "price"
                FROM orders AS o
                LEFT JOIN order_details AS d ON d.order_id = o.id
                LEFT JOIN products AS p ON p.id = d.product_id
                
            `
        )
    }
    static async createOrder() {
         const results = await db.query(
            `
                INSERT INTO orders (customer_id)
                VALUES (SELECT id FROM users WHERE email = $1)
                RETURNING id AS "orderId"
            `, []
         )
    }
}

module.exports = Order