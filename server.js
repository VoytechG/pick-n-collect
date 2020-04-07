const express = require("express");
const path = require("path");

const app = express();

app.use(express.json({ extended: false }));

app.use("/api/test", require("./routes/test"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const devPort = 5000;
const port = process.env.PORT || devPort;
app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
