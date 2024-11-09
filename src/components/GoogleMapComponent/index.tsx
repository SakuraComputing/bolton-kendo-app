import React, { useMemo } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import '../../styles/_googlemap.scss';


const key = {
  google: {
    apiKey: 'XXXXXXX',
  }
};

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

  console.log('Center coordinates:', center)

  return (
    <div className="google-map">
      <LoadScript 
        googleMapsApiKey={key.google.apiKey}
        onLoad={() => console.log("Map loaded successfully")}
        onError={(error) => console.log("Error loading Google Maps", error)}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          options={{ gestureHandling: 'none' }}
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
