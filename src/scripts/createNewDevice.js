const getDeviceStatus = require("./getDeviceStatus");

function createNewDevice(api_key, macAddress, modelName, id) {
	var Client = {
		apiKey: api_key,
		mac: macAddress,
		model: modelName
	};

	var newDevice = {
		client: Client,
		id: id,
		status: '',
	}

	let promise = new Promise((resolve, reject) => {
		getDeviceStatus(newDevice).then(dStatus => {
			newDevice.status = dStatus;
			return resolve(newDevice);
		});
	});

	return promise;
}

module.exports = createNewDevice;