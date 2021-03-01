import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { APP_THEME, COORDINATES } from '../helpers';

const sizes = {
  xs: '270px',
  sm: '500px',
  md: '600px',
  lg: '800px',
  xl: '900px',
};

const useStyles = makeStyles((theme) => ({
  responsiveSize: {
    [theme.breakpoints.down('xs')]: {
      height: sizes.xs,
      width: sizes.xs,
    },
    [theme.breakpoints.up('sm')]: {
      height: sizes.sm,
      width: sizes.sm,
    },
    [theme.breakpoints.up('md')]: {
      height: sizes.md,
      width: sizes.md,
    },
  },
}));

const MapBox = () => {
  const { md, sm } = useTheme()?.breakpoints.values;
  const isSmall = useMediaQuery(`(min-width:${sm}px)`);
  const isMedium = useMediaQuery(`(min-width:${md}px)`);
  const size = (() => {
    if (isSmall) {
      return sizes.sm;
    }

    if (isMedium) {
      return sizes.md;
    }

    return sizes.xs;
  })();

  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  const {
    responsiveSize,
  } = useStyles();
  useEffect(() => {
    mapboxgl.accessToken = process.env.GATSBY_MAPBOX_ACCESS_TOKEN;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: COORDINATES,
        zoom: 9.5,
      });

      map.on('load', () => {
        setMap(map);
        map.resize();
      });
      new mapboxgl.Marker({ color: '#1E3873' }).setLngLat(COORDINATES).addTo(map);
    };

    if (!map) initializeMap({ setMap, mapContainer });
    console.log('map', map);
  }, [map]);

  return <div ref={(el) => (mapContainer.current = el)} style={{ width: size, height: size }} />;
};

export default MapBox;
