import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useState } from 'react';
import { road, landmark, labels, theme } from '../config/maps';
const DEFAULT_ALLOW_LIB: (
  | 'places'
  | 'geometry'
  | 'drawing'
  | 'localContext'
  | 'visualization'
)[] = ['places', 'geometry'];
const DEFAULT_CENTER = { lat: 13.7563, lng: 100.5018 };
const Home = () => {
  const [maps, setMaps] = useState<google.maps.Map | undefined>(
    undefined,
  );

  const mapsStyle = [
    ...road[3],
    ...landmark[3],
    ...labels[3],
    ...theme['standard'],
  ];
  return (
    <div>
      <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API}`}
        libraries={DEFAULT_ALLOW_LIB}
      >
        <GoogleMap
          mapContainerStyle={{
            height: '100vh',
            width: '100vw',
          }}
          onLoad={(e) => setMaps(e)}
          zoom={12}
          center={DEFAULT_CENTER}
          options={{
            disableDefaultUI: true,
            styles: mapsStyle,
          }}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};
export default Home;
