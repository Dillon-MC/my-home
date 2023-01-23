var devices = [];

function getDevices() {
    return devices;
}

function addDevice(device) {
    let doesContainDevice = false;

    devices.forEach(d => {
        if(device.id === d.id) {
            doesContainDevice = true;
            return;
        }
    });

    if(!doesContainDevice)
        devices.push(device);
}

module.exports = {
    getDevices, addDevice
};