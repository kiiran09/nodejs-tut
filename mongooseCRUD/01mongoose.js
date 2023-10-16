const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/mydb");
  const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
  });
  const productModel = mongoose.model("products", productSchema);

  let data = new productModel({
    name: "iphone 15",
    brand: "Apple",
    price: 80000,
    release: "yes",
  });
  let result = await data.save();
  console.log(result);
};

main();
