const express = require("express")
const Store = require("../routes/store")
const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
      // list all posts
      const products = await Store.listProducts()
      return (res.status(200).json({ products }))
    } catch (err) {
      next(err)
    }
  })

  module.exports = router