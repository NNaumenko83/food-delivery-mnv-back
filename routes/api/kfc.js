const express = require("express");

const ctrl = require("../../controllers/kfc");

const router = express.Router();

router.get("/kfc", ctrl.getAll);

module.exports = router;
