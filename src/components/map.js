import GoogleMapReact from 'google-map-react';
import React from 'react';
import Marker from './marker';

const { GATSBY_GOOGLE_MAP_KEY } = process.env;
const isClient = typeof window !== 'undefined' && GATSBY_GOOGLE_MAP_KEY;
const GoogleMap = () => {
  const lat = parseFloat(52.10008);
  const lng = parseFloat(21.03460);
  const SIZE = '40vw';
  return (
    <div
      className="map"
      style={{ width: SIZE, height: SIZE }}
    >
      { isClient && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: GATSBY_GOOGLE_MAP_KEY }}
          defaultCenter={[lat, lng]}
          defaultZoom={10}
        >
          <Marker
            lat={lat}
            lng={lng}
            name="Vavicom"
            color="blue"
          />
        </GoogleMapReact>
      )}
    </div>
  // </section>
  );
};

export default GoogleMap;
