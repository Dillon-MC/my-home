import { useEffect } from "react";
import { useState } from "react";

function CurrentDate() {
    const [currentDay, setCurrentDay] = useState(translateDay(new Date().getDay()));

    // Translates a number (0-6) to day of the week in text
    function translateDay(date) {
        switch (date) {
            case 0:
                return 'Sunday'
            case 1:
                return 'Monday'
            case 2:
                return 'Tuesday'
            case 3:
                return 'Wednesday'
            case 4:
                return 'Thursday'
            case 5:
                return 'Friday'
            case 6:
                return 'Saturday'
            default:
                break;
        }
    }

    function translateMonth(month) {
        switch (month) {
            case 0:
                return 'January';
            case 1:
                return 'February';
            case 2:
                return 'March';
            case 3:
                return 'April';
            case 4:
                return 'May';
            case 5:
                return 'June';
            case 6:
                return 'July';
            case 7:
                return 'August';
            case 8:
                return 'September';
            case 9:
                return 'October';
            case 10:
                return 'November';
            case 11:
                return 'December';
            default:
                break;
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDay(translateDay(new Date().getDay()));
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="dateContainer">
            <h3 className="dayTxt">{currentDay}</h3>
            <h2 className="dateTxt">
                {`${translateMonth(new Date().getMonth())} ${new Date().getDate()}`}
            </h2>
        </div>
    );
}

export default CurrentDate;