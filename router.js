const router = require("express").Router();
const { getHomes, createHome, updateHome, deleteHome, getHome, getFileteredHome, getLastAddedHome } = require("./controllers/House");

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/homes", getHomes);
router.post("/add-home", createHome);
router.put("/homes/:id", updateHome)
router.delete("/homes/:id", deleteHome);
router.get("/homes/:id", getHome);
router.get("/filter", getFileteredHome)
router.get("/filter_last_added", getLastAddedHome)

module.exports = router;