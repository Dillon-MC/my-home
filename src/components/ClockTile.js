import Clock from "./Clock";
import CurrentDate from "./CurrentDate";

function ClockTile() {
    return (
        <div className="defaultTile clockTile">
            <Clock />
            <line>|</line>
            <CurrentDate />
        </div>
    );
}

export default ClockTile;