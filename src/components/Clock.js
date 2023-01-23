import { useState } from "react";
import { useEffect } from "react";

function Clock() {
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    const [hours, setHours] = useState(new Date().getHours());
    const [amOrPm, setAmOrPm] = useState(hours >= 12 ? 'PM' : 'AM');

    useEffect(() => {
        const interval = setInterval(() => {
            setMinutes(new Date().getMinutes());
            setHours(new Date().getHours());
            setAmOrPm(hours >= 12 ? 'PM' : 'AM');
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <h1 className="clockTxt">
            {hours % 12 || 12}:{minutes > 9 ? minutes : '0'+minutes} 
            <div className="pmTxt">{amOrPm}</div>
        </h1>
    );
}

export default Clock;