import React, { useMemo, useRef } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import '../../styles/_googlemap.scss';

interface GoogleMapComponentProps {
  locationName: string;
  lat: number;
  lng: number;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ locationName, lat, lng }) => {
  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = useMemo(() => ({ lat, lng }), [lat, lng]);

  const mapRef = useRef<google.maps.Map | null>(null);

  const handleMapLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  return (
    <div className="google-map">
      <LoadScript googleMapsApiKey="AIzaSyCXODqSdMI5ukTxgmx1vR0CGfBIT7z8ILM">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={handleMapLoad}
        >
          <MarkerF 
              position={center} 
              title={locationName}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
