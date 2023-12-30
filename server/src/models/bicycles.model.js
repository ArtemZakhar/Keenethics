const bicycles = require('./bicycles.mongo');

async function getAllBicycles() {
  return await bicycles.find({}, { _id: 0, __v: 0 });
}

async function addNewBicycle(planet) {
  try {
    await bicycles.updateOne(
      {
        id: planet.id,
      },
      planet,
      { upsert: true }
    );
    return { message: 'New item was stored' };
  } catch (error) {
    return { message: `There is a problem ${error}` };
  }
}

async function removeItemById(idNum) {
  return await bicycles.deleteOne({
    id: idNum,
  });
}

async function updateBicycleStatus(data, idN) {
  await bicycles.findOneAndUpdate(
    {
      id: idN,
    },
    {
      status: data.status,
    },
    { upsert: true }
  );
  const updated = await bicycles.find({ id: idN }, { _id: 0, __v: 0 });
  return updated;
}

module.exports = { getAllBicycles, addNewBicycle, removeItemById, updateBicycleStatus };
