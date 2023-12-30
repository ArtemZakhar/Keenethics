const {
  getAllBicycles,
  addNewBicycle,
  removeItemById,
  updateBicycleStatus,
} = require('../../models/bicycles.model');

async function httpGetAllBicycles(req, res) {
  return res.status(200).json(await getAllBicycles());
}

async function httpAddNewBicycle(req, res) {
  const bicycle = req.body;

  if (
    !bicycle.name ||
    !bicycle.type ||
    !bicycle.color ||
    !bicycle.price ||
    !bicycle.id ||
    !bicycle.wheel_size
  ) {
    return res.status(400).json({
      message: 'Missing required properties',
    });
  }
  if (isNaN(bicycle.id)) {
    return res.status(400).json({
      message: 'ID needs to be a Number',
    });
  }

  const response = await addNewBicycle(bicycle);

  return res.status(201).json({ ...response, ...bicycle });
}

async function httpDeleteItem(req, res) {
  const itemId = Number(req.params.id);
  const deleted = await removeItemById(itemId);
  if (!deleted.deletedCount === 0) {
    return res.status(400).json({
      message: 'Bicycle not deleted',
    });
  }
  return res.status(200).json({
    message: 'Deleted',
  });
}

async function httpUpdateBicycle(req, res) {
  const data = req.body;
  const id = req.params.id;

  const newItem = await updateBicycleStatus(data, id);
  return res.status(200).json({
    message: 'Updated',
    newItem,
  });
}

module.exports = { httpGetAllBicycles, httpAddNewBicycle, httpDeleteItem, httpUpdateBicycle };
