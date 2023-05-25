const express = require("express");
const ctrl = require("../../controllers/murakami");

const router = express.Router();

router.get("/orders", ctrl.getAll);

module.exports = router;
