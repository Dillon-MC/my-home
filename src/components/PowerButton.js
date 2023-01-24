import { useEffect, useState } from "react";
import getDeviceStatus from "../scripts/getDeviceStatus";
import turnDeviceOn from "../scripts/turnDeviceOn";
import turnDeviceOff from "../scripts/turnDeviceOff";
import { getDevices } from "../scripts/dummyDB";
import retrieveSpecificDevice from "../scripts/retrieveSpecificDevice";
import powerBtnIcon from "../Images/powerBtnIcon.svg";

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
        <label className="powerBtn" onClick={toggleDevice}>
            {/* <input type="checkbox" onChange={() => { }} checked={state.device.status === 'on' ? true : false} className="powerBtnCheckbox" onClick={() => toggleDevice(deviceName)} /> */}
            <div className="button" style={
                state.device.status === 'off' 
                ? {background: "rgb(27,27,27)", background: "linear-gradient(138deg, rgba(27,27,27,1) 0%, rgba(93,93,93,1) 100%)"}
                : {background: "rgb(0,75,175)", background: "linear-gradient(138deg, rgba(0,75,175,1) 0%, rgba(0,212,255,1) 100%)"}}>
                <img className="powerBtnIcon" src={powerBtnIcon} alt="" />
            </div>
        </label>
    );
}

export default PowerButton;