function getDeviceStatus(device) {
    return fetch(`https://developer-api.govee.com/v1/devices/state?device=${device.client.mac}&model=${device.client.model}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Govee-API-Key': '7f3ac4b5-360d-4a07-b4f1-a3a30b2e6572'
        },
    }).then(res => res.json())
        .then(data => data.data.properties[1].powerState)
        .catch(err => console.log(err));
}

module.exports = getDeviceStatus;