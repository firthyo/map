import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import { useState } from 'react';
import MOCK_B from '../data/BranchLocator.json';
import CurrentLocation from '../asset/icons/CurrentLocation.png';
import StoreIconCenter from '../asset/icons/StoreIconCenter.png';
import UnselectedStore from '../asset/icons/UnselectedStore.png';
import BrancglocatorDialog from '../components/BranchLocatorDialog/BrancglocatorDialog';
const DEFAULT_CENTER = { lat: 13.7563, lng: 100.5018 };
interface SelectedPoint {
  lat: number;
  lng: number;
  name: String;
  description: String;
  contact: String;
}
const BranchLocator = () => {
  const [maps, setMaps] = useState<google.maps.Map | undefined>(
    undefined,
  );
  const [direction, setDirection] = useState<any>();
  const [selectedPoint, setSelectedPoint] = useState<SelectedPoint>();
  const [isLocationSelected, setIsLocationSelected] =
    useState<boolean>(false);

  const directionCallback = (event: any) => {
    console.log('event::: ', event);
    setDirection(event);
    setIsLocationSelected(false);
  };

  const setSelectedLocation = (selected: any) => {
    console.log('selected: ', selected.contact);
    setSelectedPoint({
      lat: selected.lat,
      lng: selected.lng,
      name: selected.name,
      description: selected.description,
      contact: selected.contact,
    });
    setIsLocationSelected(true);
  };

  const setMapDefault = () => {
    setSelectedPoint(undefined);
    setDirection(undefined);
  };

  return (
    <div>
      {selectedPoint ? (
        <BrancglocatorDialog
          description={selectedPoint.description}
          title={selectedPoint.name}
          contact={selectedPoint.contact}
        />
      ) : null}
      <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API}`}
        libraries={['places', 'geometry']}
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
          }}
        >
          {maps && (
            <div>
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
                  // optional
                  onLoad={(directionsService) => {
                    console.log(
                      'DirectionsService onLoad directionsService: ',
                      directionsService,
                    );
                  }}
                  // optional
                  onUnmount={(directionsService) => {
                    console.log(
                      'DirectionsService onUnmount directionsService: ',
                      directionsService,
                    );
                  }}
                />
              )}
              {direction && (
                <DirectionsRenderer
                  // required
                  options={{
                    directions: direction,
                    suppressMarkers: true,
                  }}
                  // optional
                  onLoad={(directionsRenderer) => {
                    console.log(
                      'DirectionsRenderer onLoad directionsRenderer: ',
                      directionsRenderer,
                    );
                  }}
                  // optional
                  onUnmount={(directionsRenderer) => {
                    console.log(
                      'DirectionsRenderer onUnmount directionsRenderer: ',
                      directionsRenderer,
                    );
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
              {selectedPoint ? (
                <Marker
                  position={{
                    lat: selectedPoint.lat,
                    lng: selectedPoint.lng,
                  }}
                  icon={{
                    url: StoreIconCenter,
                    scaledSize: new google.maps.Size(45, 55),
                  }}
                />
              ) : null}
              {MOCK_B.map((mk, index) => {
                return (
                  <Marker
                    onClick={() => setSelectedLocation(mk)}
                    key={index}
                    position={{ lat: mk.lat, lng: mk.lng }}
                    icon={{
                      url: UnselectedStore,
                      scaledSize: new google.maps.Size(40, 50),
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
