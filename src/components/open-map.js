import React from 'react';
import {
  // eslint-disable-next-line comma-dangle
  Map, Marker, Popup, TileLayer
} from 'react-leaflet';
import { ADDRESS } from '../helpers';
import './layout.css';

const OpenMap = () => {
  const coordinates = [52.10726, 21.04587];

  return (
    <Map center={coordinates} zoom={13} style={{ width: '60vw', height: '60vh' }}>
      <TileLayer
        url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={coordinates}>
        <Popup>
          {ADDRESS}
        </Popup>
      </Marker>
    </Map>
  );
};

export default OpenMap;
