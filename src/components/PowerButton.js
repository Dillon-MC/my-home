import { useEffect, useState } from "react";
import getDeviceStatus from "../scripts/getDeviceStatus";
import turnDeviceOn from "../scripts/turnDeviceOn";
import turnDeviceOff from "../scripts/turnDeviceOff";
import { getDevices } from "../scripts/dummyDB";
import retrieveSpecificDevice from "../scripts/retrieveSpecificDevice";

function PowerButton(props) {
    const [state, setState] = useState({ device: { status: undefined } });
    let deviceName = props.props.deviceName;
    let coolDown = false;

    useEffect(() => {
        if (!coolDown) {
            getDeviceStatus(retrieveSpecificDevice(deviceName)).then(dStatus => {
                setState({ device: { status: dStatus } });
                coolDown = true;
                setTimeout(() => {
                    coolDown = false;
                }, 1000);
                return;
            });
        }
    }, [0]);

    function toggleDevice() {
        if(state.device.status === 'off') {
            turnDeviceOn(deviceName);
            setState({ device: { status: 'on' } });
        }
        else {
            turnDeviceOff(deviceName);
            setState({ device: { status: 'off' } });
        }
    }

    return (
        <label className="powerBtn">
            <input type="checkbox" onChange={() => { }} checked={state.device.status === 'on' ? true : false} className="powerBtnCheckbox" onClick={() => toggleDevice(deviceName)} />
            <div class="button">
                <div class="bar"></div>
            </div>
        </label>
    );
}

export default PowerButton;