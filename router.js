const router = require("express").Router();
const { getAgents, createAgent, deleteAgent } = require("./controllers/Agent");
const {
  getHomes,
  createHome,
  updateHome,
  deleteHome,
  getHome,
  getFileteredHome,
  getLastAddedHome,
} = require("./controllers/House");
const { checkIfAuthenticated } = require("./firebase-service/auth");

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/homes", getHomes);
router.post("/add-home", checkIfAuthenticated, createHome);
router.put("/homes/:id", updateHome);
router.delete("/homes/:id", checkIfAuthenticated, deleteHome);
router.get("/homes/:id", getHome);
router.get("/filter", getFileteredHome);
router.get("/filter_last_added", getLastAddedHome);
router.get("agents",checkIfAuthenticated, getAgents);
router.post("/create_agent", checkIfAuthenticated, createAgent);
router.delete("/agents/:id", checkIfAuthenticated, deleteAgent);

module.exports = router;
