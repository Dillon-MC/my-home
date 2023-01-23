function sendToggleRequest(device, status) {
    // Turn device ON or OFF
    return fetch("https://developer-api.govee.com/v1/devices/control", {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Govee-API-Key': '7f3ac4b5-360d-4a07-b4f1-a3a30b2e6572'
        },
        body: JSON.stringify({
            'device': device.client.mac,
            'model': device.client.model,
            'cmd': {
                'name': 'turn',
                'value': status
            }
        })
    }).then(res => res.json())
        .then(() => console.log(`Turned on device ${device.id}`))
        .catch(err => console.log(err));
}

module.exports = sendToggleRequest;