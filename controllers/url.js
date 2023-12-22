const URL = require("../models/urlSchema");

const shortid = require("shortid");

const generateShortURL = async (req, res) => {
  try {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "url is required" });
    const shortID = shortid();

    await URL.create({
      shortId: shortID,
      redirectURL: body.url,
    });

    return res.status(200).json({ id: shortID });
  } catch (err) {
    console.log(err);
  }
};

const getUrl = async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const entry = await URL.findOne({
      shortId,
    });
    res.redirect(entry.redirectURL);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { generateShortURL, getUrl };
