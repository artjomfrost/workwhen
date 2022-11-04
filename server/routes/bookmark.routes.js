const express = require("express")
const router = express.Router()
const bookmarkController = require("../controllers/bookmark.controller")
const { body } = require("express-validator")

router.post(
    "/add",
    body("category").notEmpty().trim().escape(),
    body("title").notEmpty().trim().escape(),
    body("link").notEmpty().trim().escape(),
    bookmarkController.add
)

module.exports = router