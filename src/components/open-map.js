import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import {
  // eslint-disable-next-line comma-dangle
  MapContainer, Marker, Popup, TileLayer
} from 'react-leaflet';
import { STREET, TOWN } from '../helpers';

const SIZE = '40vw';
const useStyles = makeStyles(() => ({
  root: {
    width: SIZE, height: SIZE,
  },
}));

const coordinates = [52.10008, 21.03460];

const OpenMap = () => {
  const { root } = useStyles();

  return (
    <>
      <div className={root}>
        <MapContainer center={coordinates} zoom={13} className={root}>
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
