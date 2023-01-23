const { getDevices } = require("./dummyDB");

function retrieveSpecificDevice(deviceId) {
    var device;
    var availableDevices = getDevices();

    for (let index = 0; index < availableDevices.length; index++) {
        if(availableDevices[index].id === deviceId) {
            device = availableDevices[index];
            break;
        }
    }
    return device !== undefined ? device : {ErrorMsg: "Error: Could not find device "+deviceId};
}

module.exports = retrieveSpecificDevice;