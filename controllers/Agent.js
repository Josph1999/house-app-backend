const Agent = require("../Model/user");


const createAgent = (req, res) => {
    const agent = new Agent({
      name: req.body.city,
      name_eng: req.body.name_eng,
      constact_number: req.body.constact_number,
      photo_url: req.body.photo_url
    });
  
    agent.save((err, agent) => {
      if (err) {
        res.send(err);
      }
      res.json(agent);
    });
  };

  const getAgents = (req, res) => {
    Agent.find((err, agents) => {
      if (err) {
        res.send(err);
      }
      res.json(agents);
    });
  };

  const deleteAgent = (req, res) => {
    Agent.deleteOne({ _id: req.params.id })
      .then(() => res.json({ message: "House Deleted" }))
      .catch((err) => res.send(err));
  };

  module.exports = {
    createAgent,
    getAgents,
    deleteAgent
  };