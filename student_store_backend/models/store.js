const db = require("../db")

class Store {
    static async listProducts() {
        const results = await db.query(
            `
                SELECT p.id,
                       p.name,
                       p.category,
                       p.image as "imageUrl",
                       p.description,
                       p.price
                FROM products as p
                ORDER BY p.id at DESC
            `
        )
    }
}

module.exports = Store