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
      <div style={{ width: SIZE, height: SIZE }}>
        <MapContainer center={coordinates} zoom={13} style={{ width: SIZE, height: SIZE }}>
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
