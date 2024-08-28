import e from "express";
const app = e();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<a href='gmail.com'>yaseen0696@gmail.com</a>");
});

app.get("/about", (req, res) => {
  res.send("<p>I am a fullstack developer who is actively looking for jobs.</p>");
});

app.listen(port, () => {
  console.log(
    `Server running on port ${port}, You can access it via http://localhost:${port}`
  );
});
