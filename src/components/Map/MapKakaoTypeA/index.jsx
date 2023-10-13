import React from 'react';
import './style.css';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import location from '../../../common/images/location.png';
import call from '../../../common/images/call.png';

function MapKakaoTypeA(props) {
    return (
        <div id="area-location">
            <img src={location} alt="" style={{ width: '100%' }} />
            <div>
                <Map center={{ lat: props.lat, lng: props.lng }} level={props.level} className="map">
                    <MapMarker position={{ lat: props.lat, lng: props.lng }}></MapMarker>
                </Map>
                <a href={props.mapHref} className="map-link">
                    지도 바로가기
                </a>
            </div>
            <div className="location-information">
                <p style={{ fontSize: '1rem', margin: '0', marginTop: '1rem' }}>{props.name}</p>
                <p style={{ fontSize: '0.8rem', margin: '0', marginTop: '4px', color: '#777' }}>{props.address}</p>
                <p style={{ fontSize: '0.8rem', margin: '0', marginTop: '0', color: '#777' }}>{props.number}</p>
                <a href={`tel:${props.number}`} className="location-information-call">
                    <img src={call} alt="#" style={{ width: '2rem' }} />
                </a>
            </div>
        </div>
    );
}

export default MapKakaoTypeA;
