const dbConnection = require("./02Connection");

const updateData = async () => {
  let connected = await dbConnection();
  let result = await connected.updateOne(
    { name: "Note 7" },
    {
      $set: {
        name: "Redmi Note 7",
      },
    }
  );
};

updateData();
