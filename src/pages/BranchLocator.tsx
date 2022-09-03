import {
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import MOCK_B from '../data/BranchLocator.json';
import StoreIconCenter from '../asset/icons/StoreIconCenter.png';
import CurrentLocation from '../asset/icons/CurrentLocation.png';
import styled from 'styled-components';
const DEFAULT_CENTER = { lat: 13.7563, lng: 100.5018 };
const BranchLocator = () => {
  const [maps, setMaps] = useState<google.maps.Map | undefined>(
    undefined,
  );

  console.log(MOCK_B);
  return (
    <div>
      <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API}`}
        // libraries={["places"]}
      >
        <GoogleMap
          mapContainerStyle={{
            height: '100vh',
            width: '100vw',
          }}
          onLoad={(e) => setMaps(e)}
          zoom={14}
          center={DEFAULT_CENTER}
          options={{
            disableDefaultUI: true,
          }}
        >
          {maps && (
            <div>
              <Marker
                position={DEFAULT_CENTER}
                icon={{
                  url: CurrentLocation,
                  scaledSize: new google.maps.Size(35, 50),
                }}
              />
              {MOCK_B.map((mk, index) => {
                console.log('mk.lat: ', mk.lat);
                return (
                  <Marker
                    onClick={() => {}}
                    key={index}
                    position={{ lat: mk.lat, lng: mk.lng }}
                    icon={{
                      url: CurrentLocation,
                      scaledSize: new google.maps.Size(35, 50),
                    }}
                  />
                );
              })}
            </div>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
export default BranchLocator;
