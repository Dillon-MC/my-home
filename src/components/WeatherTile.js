import { css } from '@emotion/css'
import { useEffect, useState } from 'react';

//Icons
import { WiRaindrop } from "weather-icons-react";
import WeatherIcon from './WeatherIcon';
import getWeather from '../scripts/getWeather';

function WeatherTile(params) {

    const [state, setState] = useState({});
    const [bgColor, setBgColor] = useState({ color1: '91, 163, 201', color2: '#ffffff' });

    // Only called once when page is loaded
    useEffect(() => {
        if(!state.currentTemp) {
            getWeather().then(weatherData => setState(weatherData)).catch(err => console.log(err));
        }
    });

    // Refreshes weather data ever 30 minutes
    useEffect(() => {
        const interval = setInterval(() => {
            getWeather().then(weatherData => setState(weatherData)).catch(err => console.log(err));
        }, 1800000);
        return () => clearInterval(interval);
    },[]);
    

    useEffect(() => {
        var today = new Date();

        // Changes the background color of the tile based on time-of-day and weather
        function changeBackgroundColor() {
            params.setBackground(state.icon, today.getHours());
            // Day time
            if (today.getHours() < 17) {
                if (state.icon === '01d')
                    setBgColor({ color1: '112, 193, 255', color2: '#ffe7a3' });
                else if (state.icon === '02d')
                    setBgColor({ color1: '159, 197, 212', color2: '#7b858a' });
                else if (state.icon === '03d' || state.icon === '04d')
                    setBgColor({ color1: '110, 192, 250', color2: '#525252' });
                else if (state.icon === '09d' || state.icon === '10d')
                    setBgColor({ color1: '112, 193, 255', color2: '#2b2b2b' });
                else if (state.icon === '11d')
                    setBgColor({ color1: '0, 57, 77', color2: '#282c2e' });
                else if (state.icon === '13d')
                    setBgColor({ color1: '82, 143, 163', color2: '#ebfaff' });
                else if (state.icon === '50d')
                    setBgColor({ color1: '91, 163, 201', color2: '#ffffff' });
            }
            // Evening
            else if (today.getHours() >= 17 && today.getHours() < 18) {
                // Clear
                if (state.icon === '01d')
                    setBgColor({ color1: '145, 51, 166', color2: '#eb8350' });
                // Partly cloudy
                else if (state.icon === '02d')
                    setBgColor({ color1: '235, 80, 157', color2: '#75675f' });
                // Cloudy
                else if (state.icon === '03d' || state.icon === '04d')
                    setBgColor({ color1: '250, 110, 143', color2: '#525252' });
                // Rain
                else if (state.icon === '09d' || state.icon === '10d')
                    setBgColor({ color1: '110, 63, 101', color2: '#7b858a' });
                // Thunderstorm
                else if (state.icon === '11d')
                    setBgColor({ color1: '51, 7, 30', color2: '#282c2e' });
                // Snow
                else if (state.icon === '13d')
                    setBgColor({ color1: '199, 223, 237', color2: '#e381b4' });
                // Fog
                else if (state.icon === '50d')
                    setBgColor({ color1: '148, 40, 83', color2: '#ffeae3' });
            }
            // Night time
            else if (today.getHours() >= 18) {
                if (state.icon === '01n')
                    setBgColor({ color1: '28, 22, 110', color2: '#0058b0' });
                else if (state.icon === '02n')
                    setBgColor({ color1: '43, 43, 43', color2: '#7d99ff' });
                else if (state.icon === '03n' || state.icon === '04n')
                    setBgColor({ color1: '54, 79, 168', color2: '#525252' });
                else if (state.icon === '09n' || state.icon === '10n')
                    setBgColor({ color1: '20, 43, 143', color2: '#7b858a' });
                else if (state.icon === '11n')
                    setBgColor({ color1: '7, 22, 51', color2: '#282c2e' });
                else if (state.icon === '13n')
                    setBgColor({ color1: '199, 223, 237', color2: '#171b8f' });
                else if (state.icon === '50n')
                    setBgColor({ color1: '21, 40, 148', color2: '#bfd5e0' });
            }
        }
        changeBackgroundColor();
    }, [state.icon, params]);

    // function getWeather() {
    //     console.log('Getting weather');
    //     fetch(`https://my-home-backend.vercel.app/getWeather`, {
    //         headers: {
    //             method: "GET",
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify()
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(weatherData => setState(weatherData))
    //         .catch(err => console.log(err));
    // }

    function CapitalizeString(str) {
        if (str)
            return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className={'defaultTile defaultTileLarger ' + css({
            ':before': {
                boxShadow: `inset -100px -100px 1000px rgba(${bgColor.color1}, 0.5), inset 40px 40px 90px ${bgColor.color2}`
            }
        })}>
            <div className='weatherTile'>
                <i className='currentTempTxt'>{Math.round(state.currentTemp) + '\u00b0'}</i>
                {WeatherIcon(state.icon)}
                <i className='feelsLikeTempTxt'>Feels like {Math.round(state.feelsLikeTemp) + '\u00b0'}</i>
                <i className='conditionTxt'>{CapitalizeString(state.description)}</i>
                <i className='humidityTxt'><WiRaindrop size={36} className='humidityIcon' />{state.humidity + '%'}</i>
                <i className='windTxt'>Wind {Math.round(state.windSpeed) + 'mph'}</i>
            </div>
        </div>
    );
}

export default WeatherTile;