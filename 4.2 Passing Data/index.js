import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs",{
    h1Text : "Please enter your name",    
  })
});

app.post("/submit", (req, res) => {
  const { fName, lName } = req.body;
  res.render("index.ejs",{
    h1Text: `You have ${fName.length + lName.length} letters in your name ✌️`,    
  })

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
