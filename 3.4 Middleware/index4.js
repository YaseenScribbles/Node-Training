import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirName = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let bandName = "";

app.use(bodyParser.urlencoded({ extended: "true" }));

const bandNameGenerator = (req, res, next) => {
  const { street, pet } = req.body;
  bandName = street + pet + "⭐";
  next();
};

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  // console.log(__dirName);
  res.sendFile(__dirName + "/Public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is :</h1> <strong>${bandName}</strong>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
