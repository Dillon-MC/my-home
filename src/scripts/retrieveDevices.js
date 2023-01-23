const { getDevices } = require("./dummyDB");

function retrieveDevices() {
    return getDevices();
}

module.exports = retrieveDevices;