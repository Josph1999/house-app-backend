const House = require("../Model/house");

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
    city: req.body.city,
    district: req.body.district,
    size: req.body.size,
    price: req.body.price,
    house_id: req.body.house_id,
    description: req.body.description,
    description_eng: req.body.description_eng,
    adress: req.body.adress,
    adress_eng: req.body.adress_eng,
    photos: req.body.photos,
    rooms: req.body.rooms,
    floor_quantity: req.body.floor_quantity,
    floor: req.body.floor,
    agent: req.body.agent,
    agent_eng: req.body.agent_eng,
    type: req.body.type,
    status: req.body.status,
    remont: req.body.remont,
    home_type: req.body.home_type,
    furniture: req.body.furniture,
    technic: req.body.technic,
    balcony: req.body.balcony,
    title: req.body.title,
    title_eng: req.body.title_eng,
    contact_number: req.body.contact_number,
    parking: req.body.parking,
    hot_water: req.body.hot_water,
    heating: req.body.heating,
    fireplace: req.body.fireplace,
    elevator: req.body.elevator,
    freight_elevator: req.body.freight_elevator,
    internet: req.body.internet,
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
        city: req.body.city,
        district: req.body.district,
        size: req.body.size,
        price: req.body.price,
        house_id: req.body.house_id,
        description: req.body.description,
        description_eng: req.body.description_eng,
        adress: req.body.adress,
        adress_eng: req.body.adress_eng,
        photos: req.body.photos,
        rooms: req.body.rooms,
        floor_quantity: req.body.floor_quantity,
        floor: req.body.floor,
        agent: req.body.agent,
        agent_eng: req.body.agent_eng,
        type: req.body.type,
        status: req.body.status,
        remont: req.body.remont,
        home_type: req.body.home_type,
        furniture: req.body.furniture,
        technic: req.body.technic,
        balcony: req.body.balcony,
        title: req.body.title,
        title_eng: req.body.title_eng,
        contact_number: req.body.contact_number,
        parking: req.body.parking,
        hot_water: req.body.hot_water,
        heating: req.body.heating,
        fireplace: req.body.fireplace,
        elevator: req.body.elevator,
        freight_elevator: req.body.freight_elevator,
        internet: req.body.internet,
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
    res.status(404).send({message: 'Not Found!'})
  }
};
const getFileteredHome = async (req, res) => {
  try {
    const home = await House.find({
      $and: [
        req.query.city_eng ? { "city.name_en": { $eq: req.query.city_eng } } : {},
        req.query.city_ka ? { "city.name_ka": { $eq: req.query.city_ka } } : {},
        req.query.district_eng ? { "district.name_en": { $eq: req.query.district_eng } } : {},
        req.query.district_ka ? { "district.name_ka": { $eq: req.query.district_ka } } : {},
        req.query.type_eng ? { "type.name_en": { $eq: req.query.type_eng } } : {},
        req.query.type_ka ? { "type.name_ka": { $eq: req.query.type_ka } } : {},
        req.query.house_id ? { house_id: req.query.house_id } : {},
        req.query.price_from && req.query.price_to
          ? {
              $and: [
                { price: { $gte: req.query.price_from } },
                { price: { $lte: req.query.price_to } },
              ],
            }
          : {},
        req.query.district ? { district: req.query.district } : {},
        req.query.price_from && !req.query.price_to
          ? {
              $and: [{ price: { $gte: req.query.price_from } }],
            }
          : {},
        !req.query.price_from && req.query.price_to
          ? {
              $and: [{ price: { $lte: req.query.price_to } }],
            }
          : {},
      ],
    });
    return res.json(home);
  } catch (err) {
    res.status(404).send({message: 'Not Found!'})
  }
};
const getLastAddedHome = async (req, res) => {
  try {
    const home = await House.find().sort({ createdAt: -1 });
    return res.json(home);
  } catch (err) {
    res.status(404).send({message: 'Not Found!'})
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
