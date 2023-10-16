const dbConnection = require("./02Connection");

const deleteData = async () => {
  const connected = await dbConnection();
  let result = connected.deleteMany({
    name: "phone 2",
  });
  console.log("Deleted successfully");
};

deleteData();
