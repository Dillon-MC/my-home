import { WiDaySunny } from "weather-icons-react";
import { WiNightClear } from "weather-icons-react";
import { WiDayCloudy } from "weather-icons-react";
import { WiNightAltPartlyCloudy } from "weather-icons-react";
import { WiCloudy } from "weather-icons-react";
import { WiRain } from "weather-icons-react";
import { WiDayRain } from "weather-icons-react";
import { WiNightAltRain } from "weather-icons-react";
import { WiDayThunderstorm } from "weather-icons-react";
import { WiNightAltThunderstorm } from "weather-icons-react";
import { WiSnowflakeCold } from "weather-icons-react";
import { WiFog } from "weather-icons-react";

function WeatherIcon(id) {
    switch(id) {
        case '01d':
            return <WiDaySunny className="weatherIcon" size={60} color='#ffe10099' />;
        case '01n':
            return <WiNightClear className="weatherIcon" size={60} color='#7faaf0' />;
        case '02d':
            return <WiDayCloudy className="weatherIcon" size={60} color='#e0e0e0' />;
        case '02n':
            return <WiNightAltPartlyCloudy className="weatherIcon" size={60} color='#686e8c' />;
        case '03d':
            return <WiCloudy className="weatherIcon" size={70} color='#d3d7de' />;
        case '03n':
            return <WiCloudy className="weatherIcon" size={60} color='#d3d7de' />;
        case '04d':
            return <WiCloudy className="weatherIcon" size={60} color='#d3d7de' />;
        case '04n':
            return <WiCloudy className="weatherIcon" size={60} color='##d3d7de' />;
        case '09d':
            return <WiRain className="weatherIcon" size={60} color='#8fb3d9' />;
        case '09n':
            return <WiRain className="weatherIcon" size={60} color='#8fb3d9' />;
        case '10d':
            return <WiDayRain className="weatherIcon" size={60} color='#92afb3' />;
        case '10n':
            return <WiNightAltRain className="weatherIcon" size={60} color='#4c7aa6' />;
        case '11d':
            return <WiDayThunderstorm className="weatherIcon" size={60} color='#4d4c46' />;
        case '11n':
            return <WiNightAltThunderstorm className="weatherIcon" size={60} color='#3a4352' />;
        case '13d':
            return <WiSnowflakeCold className="weatherIcon" size={60} color='#d2e3fc' />;
        case '13n':
            return <WiSnowflakeCold className="weatherIcon" size={60} color='#d2e3fc' />;
        case '50d':
            return <WiFog className="weatherIcon" size={60} color='#e1e6ed' />;
        case '50n':
            return <WiFog className="weatherIcon" size={60} color='#e1e6ed' />;
        default:
            return <WiCloudy className="weatherIcon" size={60} color='#d3d7de' />;
    }
}

export default WeatherIcon;