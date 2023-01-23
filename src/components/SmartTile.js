import PowerButton from './PowerButton';

function SmartTile(props) {
    return (
        <div className={props.tileType !== undefined ? props.tileType : 'defaultTile'}>
            {props.tileType !== 'fanTile' ? <PowerButton props={props} /> : ''}
            <img title='deviceIcon' className={props.tileType === 'fanTile' ? 'deviceIconFanTile' : 'deviceIcon'} alt='' src={props.deviceIcon} />
            <div className='SmartTileTxt'>
                <div>{props.deviceName}</div>
                <div className='deviceStatusTxt'>{props.tileType === 'fanTile' ? '51%' : 'On'}</div>
            </div>
        </div>
    );
}

export default SmartTile;