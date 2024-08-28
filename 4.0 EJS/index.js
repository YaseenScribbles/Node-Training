import e from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = e();
const port = 3000;
const currentDay = new Date().getDay();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views/");

app.get("/", (req, res) => {
  res.render("index", {
    day: currentDay,
  });
});

app.listen(port, () => {
  console.log("server running at port " + port);
});
