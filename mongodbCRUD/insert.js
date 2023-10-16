const dbConnection = require("./02Connection");

const insert = async () => {
  const connected = await dbConnection();
  const result = await connected.insertOne({ name: "phone 2", brand: "nothing", price: 30000 });
  console.log("Inserted");
};

insert();
