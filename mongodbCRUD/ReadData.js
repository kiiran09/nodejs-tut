const dbConnection = require("./02Connection");

const main = async () => {
  let data = await dbConnection();
  data = await data.find().toArray();
  console.log(data);
};

main();
