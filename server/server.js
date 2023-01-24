const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const { Schema } = mongoose;

const productsSchema = new Schema({
  image: String,
  name: String,
  model: String,
  price: Number,
});

const Products = mongoose.model("products", productsSchema);

app.get("/products", (req, res) => {
  Products.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  Products.findById(id, (err, doc) => {
    if (!err) {
      if (doc) {
        res.send(doc);
      } else {
        res.status(404).json({ message: "products undefined" });
      }
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  Products.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(200).json({ message: "product deleted" });
    } else {
      res.status(404).json({ message: err });
    }
  });
});

app.post("/products", (req, res) => {
  let product = new Products({
    image: req.body.image,
    name: req.body.name,
    model: req.body.model,
    price: req.body.price,
  });
  product.save();
});

const PROT = process.env.PORT;
const DB = process.env.DB_URL.replace("<password>", process.env.PASSWORD);

mongoose.connect(DB, (err) => {
  if (!err) {
    app.listen(PROT, () => {
      console.log(`http://localhost:${PROT}/products`);
    });
  }
});
