import React from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';

const MapContainer = (props) => (<GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCixUR0mtJz0qyWd0FDI1-WYEcHjqvaw5Y' }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        yesIWantToUseGoogleMapApiInternals
    >
        <Marker
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
        />
    </GoogleMapReact>)

MapContainer.defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };


export default MapContainer;