import React from 'react';
import {
  // eslint-disable-next-line comma-dangle
  MapContainer, Marker, Popup, TileLayer
} from 'react-leaflet';
import { STREET, TOWN } from '../helpers';

const OpenMap = () => {
  const coordinates = [52.10008, 21.03460];
  const SIZE = '40vw';
  return (
    <>
      <div className="open-map">
        <MapContainer className="open-map" center={coordinates} zoom={13}>
          <TileLayer
            url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={coordinates}>
            <Popup>
              {`${STREET}, ${TOWN}`}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default OpenMap;
