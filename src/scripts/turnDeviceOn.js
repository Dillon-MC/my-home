const { getDevices } = require("./dummyDB");
const sendToggleRequest = require("./sendDeviceToggleRequest");

function turnDeviceOn(deviceId) {
    // Create a reference to the devices
    let devices = getDevices();
    console.log("Endpoint 'turnDeviceOn' reached, turning on device '" + deviceId + "'");

    // Search the devices array for a device that matches the given ID
    for (let index = 0; index < devices.length; index++) {
        //If a match is found, execute the command to turn the device on
        if (devices[index].id === deviceId) {
            // Call the ".turnOn()" function on the device
            sendToggleRequest(devices[index], 'on').then(() => {
                devices[index].status = 'on';
                console.log("Found and turned on device " + deviceId);
                return;
            });
        }
    }
    //If no match is found, return an error message
    console.log("Failed to turn on device " + deviceId + ". Reason: device not found. Check that the deviceID is correct.");
}

module.exports = turnDeviceOn;