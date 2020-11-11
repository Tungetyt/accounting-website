import React from 'react';
import {
  // eslint-disable-next-line comma-dangle
  Map, Marker, Popup, TileLayer
} from 'react-leaflet';
import { STREET, TOWN } from '../helpers';

const OpenMap = () => {
  const coordinates = [52.10726, 21.04587];
  const size = '70vh';
  return (
    <Map center={coordinates} zoom={13} style={{ width: size, height: size }}>
      <TileLayer
        url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={coordinates}>
        <Popup>
          {`${STREET}, ${TOWN}`}
        </Popup>
      </Marker>
    </Map>
  );
};

export default OpenMap;
