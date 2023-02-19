const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const BookStore = require("./models/BookModel");

const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(cors());

//mongoose connection
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://harhat18:12341234@cluster0.rcsrylh.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("connected database"))
  .catch((err) => console.log(err));

app.get("/books", (req, res) => {
  BookStore.find().then((books) => res.json(books));
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  BookStore.findByIdAndDelete({ _id: id }, (err) => {
    if (!err) {
      console.log("book deleted");
    } else {
      console.log(err);
    }
  });
});
app.put("/lend/:id", async (req, res) => {
  try {
    await BookStore.findByIdAndUpdate(req.params.id, {
      $inc: { quantity: -1 },
    });
  } catch (err) {
    console.log(err);
  }
});
app.put("/back/:id", async (req, res) => {
  try {
    await BookStore.findByIdAndUpdate(req.params.id, {
      $inc: { quantity: 1 },
    });
  } catch (err) {
    console.log(err);
  }
});
app.post("/newbook", async (req, res) => {
  try {
    const newBook = new BookStore({
      bookName: req.body.bookName,
      author: req.body.author,
      quantity: req.body.quantity,
      department: req.body.department,
      comments: req.body.comments,
    });
    const book = await newBook.save();
    res.status(200).json(book);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log("server çalıştı");
});
