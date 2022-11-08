const House = require("../Model/house");
const SearchHouse = require("../Model/searchHouse")

const getHomes = (req, res) => {
  House.find((err, homes) => {
    if (err) {
      res.send(err);
    }
    res.json(homes);
  });
};

const createHome = (req, res) => {
  const home = new House({
    title: req.body.title,
    description: req.body.description,
    size: req.body.size,
    adress: req.body.adress,
    type: req.body.type,
    agent: req.body.agent,
    city: req.body.city,
    district: req.body.disrtict,
    price: req.body.price,
    rooms: req.body.rooms,
    house_id: req.body.house_id,
    photos: req.body.photos,
    condition: req.body.condition,
    floor: req.body.floor,
    floor_quantity: req.body.floor_quantity,
    furniture: req.body.furniture,
    type: req.body.type,
    builiding_type: req.body.builiding_type,
    technic: req.body.technic,
    balcony: req.body.balcony,
    contact_number: req.body.contact_number,
  });

  home.save((err, home) => {
    if (err) {
      res.send(err);
    }
    res.json(home);
  });
};

const updateHome = (req, res) => {
  House.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        size: req.body.size,
        adress: req.body.adress,
        type: req.body.type,
        agent: req.body.agent,
        city: req.body.city,
        photos: req.body.photos,
        district: req.body.disrtict,
        price: req.body.price,
        rooms: req.body.rooms,
        house_id: req.body.house_id,
      },
    },
    { new: true },
    (err, House) => {
      if (err) {
        res.send(err);
      } else res.json(House);
    }
  );
};

const deleteHome = (req, res) => {
  House.deleteOne({ _id: req.params.id })
    .then(() => res.json({ message: "House Deleted" }))
    .catch((err) => res.send(err));
};

const getHome = async (req, res) => {
  try {
    const home = await House.findById({ _id: req.params.id });
    return res.json(home);
  } catch (err) {
    console.log(err);
  }
};
const getFileteredHome = async (req, res) => {
  try {
    const home = await SearchHouse.find({
      $and: [
        req.query.city ? { city: req.query.city } : {},
        req.query.house_id ? { house_id: req.query.house_id } : {},
        req.query.price_from && req.query.price_to
          ? {
              $and: [
                { price: { $gt: req.query.price_from } },
                { price: { $lt: req.query.price_to } },
              ],
            }
          : {},
          req.query.district ? { district: req.query.district } : {},
      ],
    });
    return res.json(home);
  } catch (err) {
    console.log(err);
  }
};
const getLastAddedHome = async (req, res) => {
  try {
    const home = await House.find().sort({ createdAt: -1 });
    return res.json(home);
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  getHomes,
  createHome,
  updateHome,
  deleteHome,
  getHome,
  getFileteredHome,
  getLastAddedHome,
};