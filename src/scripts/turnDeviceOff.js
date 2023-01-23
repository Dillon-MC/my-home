const { getDevices } = require("./dummyDB");
const sendToggleRequest = require("./sendDeviceToggleRequest");

function turnDeviceOff(deviceId) {
    let devices = getDevices();
    console.log("Endpoint 'turnDeviceOff' reached, turning off device '" + deviceId + "'");

    for (let index = 0; index < devices.length; index++) {
        if (devices[index].id === deviceId) {
            sendToggleRequest(devices[index], 'off').then(() => {
                devices[index].status = 'off';
                console.log("Found and turned off device " + deviceId);
                return;
            });
        }
    }
    console.log("Failed to turn off device " + deviceId + ". Reason: device not found. Check that the deviceID is correct.");
}


module.exports = turnDeviceOff;