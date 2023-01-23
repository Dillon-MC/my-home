import '../App.css';
// Icon images
import outletIcon from '../Images/outletIcon.png';
//import fanIcon from '../Images/fanIcon.png';

// Components
import SmartTile from './SmartTile';
import WeatherTile from './WeatherTile';
import { useEffect, useState } from 'react';
import ClockTile from './ClockTile';
import createNewDevice from '../scripts/createNewDevice';
import { addDevice } from '../scripts/dummyDB';
import retrieveDevices from '../scripts/retrieveDevices';

function App() {
  const [state, setState] = useState();
  const [backgroundImage, setBackgroundImage] = useState('');
  const [didCreateDevices, setDidCreateDevices] = useState(false);

  function getDevices() {
    if (state === undefined)
      setState(retrieveDevices());
  }

  function setBackground(currentWeather, currentTime) {
    if (currentWeather !== undefined) {
      if (currentTime < 17)
        setBackgroundImage(`b${currentWeather}9`);
      if (currentTime >= 17 && currentTime < 18)
        setBackgroundImage(`b${currentWeather.slice(0, -1)}17`);
      if (currentTime >= 18)
        setBackgroundImage(`b${currentWeather}19`);
    }
  }

  useEffect(() => {
    getDevices();
  },[0]);

  useEffect(() => {
    if (!didCreateDevices) {
      createDevices();
      setDidCreateDevices(true);
    }
  }, [didCreateDevices]);

  function displayDevices() {
    let deviceList = [];
    if (state !== undefined)
      state.forEach(device => {
        deviceList.push(<SmartTile deviceIcon={outletIcon} deviceName={device.id} key={device.id}/>);
      });

    return deviceList;
  }

  function createDevices() {
    /*Govee API key*/			/*Device mac address*/	/*Device model name*/ /*Custom ID*/
    createNewDevice("7f3ac4b5-360d-4a07-b4f1-a3a30b2e6572", "D3:09:D4:AD:FC:44:41:CC", "H5080", "Cage Outlet").then(newDevice => addDevice(newDevice));
    createNewDevice("7f3ac4b5-360d-4a07-b4f1-a3a30b2e6572", "EF:B0:D4:AD:FC:3D:4D:4A", "H5080", "Desk Outlet").then(newDevice => addDevice(newDevice));
  }

  return (
    <div className={"App " + backgroundImage}>
      <ClockTile />
      <WeatherTile setBackground={setBackground} />
      <div className='deviceGrid'>
        {displayDevices()}
      </div>
    </div>
  );
}

export default App;
