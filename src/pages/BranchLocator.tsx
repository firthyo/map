import {
  DirectionsRenderer,
  DirectionsService,
  DistanceMatrixService,
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { MOCK_BRANCH } from '../data/BRANCH_LOCATOR_DATA_MOCK';
import CurrentLocation from '../asset/icons/CurrentLocation.png';
import StoreIconCenter from '../asset/icons/StoreIconCenter.png';
import UnselectedStore from '../asset/icons/UnselectedStore.png';
import BranchlocatorDialog from '../components/BranchLocatorDialog/BranchlocatorDialog';
import { road, landmark, labels, theme } from '../config/maps';
const DEFAULT_CENTER = { lat: 13.7563, lng: 100.5018 };
const DEFAULT_ALLOW_LIB: (
  | 'places'
  | 'geometry'
  | 'drawing'
  | 'localContext'
  | 'visualization'
)[] = ['places', 'geometry'];
interface SelectedPoint {
  id: number;
  lat: number;
  lng: number;
  name: String;
  description: String;
  contact: String;
  image?: any;
}
const BranchLocator = () => {
  const [maps, setMaps] = useState<google.maps.Map | undefined>(
    undefined,
  );
  const [matrix, setMatrix] = useState<any>(undefined);
  const mapsStyle = [
    ...road[3],
    ...landmark[1],
    ...labels[3],
    ...theme['standard'],
  ];
  const [direction, setDirection] = useState<any>(undefined);
  const [selectedPoint, setSelectedPoint] = useState<
    SelectedPoint | undefined
  >(undefined);
  const [isLocationSelected, setIsLocationSelected] =
    useState<boolean>(false);
  const [isrenderPath, setIsrenderPath] = useState<boolean>(false);

  const directionCallback = (event: any) => {
    setDirection(event);
    setIsLocationSelected(false);
  };

  const setMapDefault = () => {
    setSelectedPoint(undefined);
    setDirection(undefined);
    setIsrenderPath(false);
  };
  useEffect(() => {
    if (!selectedPoint) return;
    setDirection(undefined);
    setIsrenderPath(false);
    setMatrix(undefined);
  }, [selectedPoint]);

  return (
    <div>
      {selectedPoint ? (
        <BranchlocatorDialog
          description={selectedPoint.description}
          title={selectedPoint.name}
          contact={selectedPoint.contact}
          renderPath={() => setIsrenderPath(true)}
          matrix={matrix}
          image={selectedPoint.image ?? ''}
        />
      ) : null}
      <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API}`}
        libraries={DEFAULT_ALLOW_LIB}
      >
        <GoogleMap
          onClick={() => setMapDefault()}
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
        >
          {maps && (
            <div>
              {selectedPoint && !matrix && (
                <DistanceMatrixService
                  callback={(e) => setMatrix(e?.rows[0].elements[0])}
                  options={{
                    destinations: [
                      {
                        lat: selectedPoint.lat,
                        lng: selectedPoint.lng,
                      },
                    ],
                    origins: [
                      {
                        lng: DEFAULT_CENTER.lng,
                        lat: DEFAULT_CENTER.lat,
                      },
                    ],
                    travelMode: google.maps.TravelMode.DRIVING,
                  }}
                />
              )}
              {google && isLocationSelected && selectedPoint && (
                <DirectionsService
                  // required
                  options={{
                    destination: new google.maps.LatLng(
                      selectedPoint.lat,
                      selectedPoint.lng,
                    ),
                    origin: new google.maps.LatLng(
                      DEFAULT_CENTER.lat,
                      DEFAULT_CENTER.lng,
                    ),
                    travelMode: google.maps.TravelMode.DRIVING,
                  }}
                  // required
                  callback={directionCallback}
                />
              )}
              {direction && isrenderPath && (
                <DirectionsRenderer
                  // required
                  options={{
                    directions: direction,
                    suppressMarkers: true,
                  }}
                />
              )}
              <Marker
                position={DEFAULT_CENTER}
                icon={{
                  url: CurrentLocation,
                  scaledSize: new google.maps.Size(35, 50),
                }}
              />
              {MOCK_BRANCH.map((mk, index) => {
                return (
                  <Marker
                    onClick={() => {
                      setSelectedPoint(mk);
                      setIsLocationSelected(true);
                    }}
                    key={index}
                    position={{ lat: mk.lat, lng: mk.lng }}
                    icon={{
                      url:
                        selectedPoint?.id === mk.id
                          ? StoreIconCenter
                          : UnselectedStore,
                      scaledSize:
                        selectedPoint?.id === mk.id
                          ? new google.maps.Size(60, 70)
                          : new google.maps.Size(40, 50),
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
