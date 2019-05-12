import React from 'react';
import GoogleMapReact from 'google-map-react';
import { inject, observer } from 'mobx-react';
import supercluster from 'points-cluster';
import { size } from 'lodash';

import { markersData } from '../../assets/fakeData'; 

import Marker from './Marker';

const MapContainer = (props) => {
    const { MapStore } = props;

    let  clusters = supercluster(
      markersData,
      {
        minZoom: 3, // min zoom to generate clusters on
        maxZoom: 15, // max zoom level to cluster the points on
        radius: 60, // cluster radius in pixels
      }
    );
    clusters = size(MapStore.mapProps) ? clusters(MapStore.mapProps) : [];

    clusters = clusters.map(({ wx, wy, numPoints, points }) => ({
      lat: wy,
      lng: wx,
      text: numPoints,
      numPoints,
      id: `${numPoints}_${points[0].id}`,
    }));

    console.log(clusters);

    return (<GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCixUR0mtJz0qyWd0FDI1-WYEcHjqvaw5Y' }}
        options={props.options}
        hoverDistance={props.hoverDistance}
        center={props.center}
        zoom={10}
        onChange={MapStore.onChange}
        onChildClick={MapStore.onMarkerClicked}
        yesIWantToUseGoogleMapApiInternals
    >
        {
          clusters.map(({ id, numPoints, ...markerProps }) => <Marker {...markerProps} />)
        }
    </GoogleMapReact>)
  }

MapContainer.defaultProps = {
  center: {
    lat: 37.567,
    lng: 126.967
  },
  clusterRadius: 500,
  hoverDistance: 30,
  options: {
    minZoom: 3,
    maxZoom: 15,
  }
};


export default inject('MapStore')(observer(MapContainer));