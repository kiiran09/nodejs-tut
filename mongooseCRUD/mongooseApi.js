const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydb");

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
});

const create = async () => {
  let productModel = mongoose.model("products", productSchema);
  let data = new productModel({
    name: "g72",
    brand: "Moto",
    price: 2000,
  });
  let result = await data.save();
  console.log(result);
};

// create();

const update = async () => {
  let productModel = mongoose.model("products", productSchema);
  let data2 = await productModel.updateOne(
    { name: "g72" },
    {
      $set: { name: "M72" },
    }
  );
  console.log(data2);
};

// update();

const deleteData = async () => {
  let productModel = mongoose.model("products", productSchema);

  let data3 = await productModel.deleteOne({ name: "M72" });
  console.log(data3);
};

deleteData();
