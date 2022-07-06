const express = require("express")
const Orders = require("../routes/orders")
const { requireAuthenticatedUser } = require("../middleware/security")
const router = express.Router()

router.get("/", requireAuthenticatedUser, async (req, res, next) => {
    try {
      const { user } = res.locals
      const orders = await Orders.listOrdersForUser({user})
      return (res.status(200).json({ orders }))
    } catch (err) {
      next(err)
    }
  })

  router.post("/", requireAuthenticatedUser, async (req, res, next) => {
    try {
      const { user } = res.locals
      const order = await Orders.createOrder({user})
      return (res.status(200).json({ order }))
    } catch (err) {
      next(err)
    }
  })

  module.exports = router