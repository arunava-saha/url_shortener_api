const express = require("express");
const { generateShortURL, getUrl } = require("../controllers/url");
const verify = require("../config/verify");

const router = express.Router();

router.post("/", verify, generateShortURL);
router.get("/:shortId", getUrl);

module.exports = router;
