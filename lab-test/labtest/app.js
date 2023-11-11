const express = require("express");
const app = express();
const accountsModule = require("./modules/accountsModule");
const cors = require("cors");
const port = 3040;

const addresses = accountsModule.getAddresses();

app.use(cors());

app.use(express.json());

app.get("/account/addresses", (req, res) => {
  res.json(addresses);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(addresses);
});
