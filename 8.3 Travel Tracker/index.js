import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Pool({
  user: "postgres",
  password: "sa#999s%5",
  host: "localhost",
  port: 5432,
  database: "world",
});
db.connect();

let countries = [];
let errors = "";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  countries = [];
  const result = await db.query("select country_code from visited_countries");
  result.rows.forEach((e) => countries.push(e.country_code));
  res.render("index.ejs", {
    total: countries.length,
    countries: countries,
    error: errors,
  });
});

app.post("/add", async (req, res) => {
  let code = "";
  let rowCount = 0;
  const { country } = req.body;
  if (country) {
    try {
      const result = await db.query(
        "select code from countries where name ilike $1",
        [country]
      );
      code = result.rows[0].code;
      rowCount = result.rows.length;
    } catch (error) {
      errors = "Please enter valid country name!";
    }
    if (rowCount) {
      try {
        await db.query(
          `insert into visited_countries (country_code) values ('${code}')`
        );
      } catch (error) {
        errors = "Country already added!";
      }
    }
  } else {
    errors = "Please enter country name";
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
