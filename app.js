//cst336-bprovansal.codeanyapp.com:8081/ ROOT DIRECTORY
const express = require('express');
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/", function(req, res) {
  //res.send("It Works!");
  res.render("index.html");
});

app.get("/mercury", function(req, res) {
  //res.send("This will be the Mercury web page.");
  res.render("mercury.html");
});

app.get("/venus", function(req, res) {
  res.send("This will be the Venus web page.");
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Express Server is running.");
});
/*app.listen("8081", "0.0.0.0", function() {
  console.log("Express Server is running.");
});*/