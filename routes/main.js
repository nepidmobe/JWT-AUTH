const express = require("express");
const { login, dashboard } = require("../controllers/main");
const router = express.Router();

router.route("/dashboard").get(dashboard);
router.route("/login").get(login);
module.exports = router;
