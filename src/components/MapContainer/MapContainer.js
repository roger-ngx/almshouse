import React from 'react';
import GoogleMapReact from 'google-map-react';
import { inject, observer } from 'mobx-react';

import Marker from './Marker';

const MapContainer = (props) => {
    const { MapStore } = props;

    return (<GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCixUR0mtJz0qyWd0FDI1-WYEcHjqvaw5Y' }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        onChildClick={MapStore.onMarkerClicked}
        yesIWantToUseGoogleMapApiInternals
    >
        <Marker
            lat={37.566667}
            lng={126.966667}
            qtt={2}
        />
    </GoogleMapReact>)
  }

MapContainer.defaultProps = {
  center: {
    lat: 37.567,
    lng: 126.967
  },
  zoom: 13
};


export default inject('MapStore')(observer(MapContainer));