const express = require("express");

const app = express();

app.use(express.json({ extended: false }));

app.use("/api/test", require("./routes/test"));

const serverPort = 5000;
app.listen(serverPort, () => {
  console.log(`Listening on port ${serverPort}!`);
});
