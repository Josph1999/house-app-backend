const router = require("express").Router();
const { getAgents, createAgent, deleteAgent } = require("./controllers/Agent");
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
router.get("agents", getAgents)
router.post("/create_agent", createAgent)
router.delete("/agents/:id", deleteAgent)

module.exports = router;