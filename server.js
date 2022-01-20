const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is listening",
  });
});
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT} in development mode`);
});
