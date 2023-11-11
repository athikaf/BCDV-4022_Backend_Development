const addressList = require("./addresses.json");

function getAddresses() {
  return addressList;
}

module.exports = {
  getAddresses,
};
