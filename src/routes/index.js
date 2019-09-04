const { Router } = require("express");
const router = Router();
const uuid = require("uuid/v4");
const fs = require("fs");

const json_books = fs.readFileSync("src/books.json", "utf-8");
let books = JSON.parse(json_books);






router.get("/", (req, res) => {
  res.render("index.ejs", {
    books
  });
});






router.get("/nueva-entrada", (req, res) => {
  res.render("nueva-entrada.ejs");
});






router.post("/nueva-entrada", (req, res) => {
  const { title, autor, image, description } = req.body;
  //validaciom
  if (!title || !autor || !image || !description) {
    res.status(400).send("tienes querellenar todos los campos");
    return;
  }

  let newbook = {
    id: uuid(),
    title,
    autor,
    image,
    description
  };

  books.push(newbook);

  const json_books = JSON.stringify(books);
  fs.writeFileSync("src/books.json", json_books, "utf-8");
  res.redirect("/");
});



router.get("/delete/:id", (req, res) => {
  books = books.filter(book => book.id != req.params.id);
  const json_books = JSON.stringify(books);
  fs.writeFileSync("src/books.json", json_books, "utf-8");
  res.redirect("/");
});



module.exports = router;
