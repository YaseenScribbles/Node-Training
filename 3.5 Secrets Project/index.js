//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser";
import e from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = e();
const port = 3000;
const __dirName = dirname(fileURLToPath(import.meta.url));
const crtPassword = "ILoveProgramming";
var inputPassword = "";

app.use(bodyParser.urlencoded({ extended: true }));

const verifier = (req, res, next) => {
  const { password } = req.body;
  inputPassword = password;
  next();
};

app.use(verifier);

app.get("/", (req, res) => {
  res.sendFile(__dirName + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (inputPassword === crtPassword) {
    res.sendFile(__dirName + "/public/secret.html");
  } else {
    res.redirect("/")
  }
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
