import {
  DirectionsRenderer,
  DirectionsService,
  DistanceMatrixService,
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { GEO_ITEM_DATA_MOCK } from '../data/GEO_ITEM_DATA_MOCK';
import { MOCK_BRANCH } from '../data/BRANCH_LOCATOR_DATA_MOCK';
import UnselectedStore from '../asset/icons/UnselectedStore.png';
import { road, landmark, labels, theme } from '../config/maps';
import SearchBar from '../components/SearchBar/SearchBar';
import styled from 'styled-components';
import BranchlocatorDialog from '../components/BranchLocatorDialog/BranchlocatorDialog';
import ProductDialog from '../components/ProductDialog/ProductDialog';

const DEFAULT_CENTER = { lat: 13.7563, lng: 100.5018 };
const DEFAULT_ALLOW_LIB: (
  | 'places'
  | 'geometry'
  | 'drawing'
  | 'localContext'
  | 'visualization'
)[] = ['places', 'geometry'];
interface IProduct {
  name: string;
  image: string;
}
const GeoMarketing = () => {
  const [maps, setMaps] = useState<google.maps.Map | undefined>(
    undefined,
  );
  const [dataShow, setDataShow] = useState(MOCK_BRANCH);
  const [selectedPoint, setSelectedPoint] = useState<any>();
  const [productSelected, setProductSelected] = useState<
    IProduct | undefined
  >(undefined);
  const [isrenderPath, setIsrenderPath] = useState<boolean>(false);
  const [suggestion, setSuggestion] = useState<any[]>([]);
  const [matrix, setMatrix] = useState<any>(undefined);
  const mapsStyle = [
    ...road[3],
    ...landmark[1],
    ...labels[3],
    ...theme['standard'],
  ];
  const handleSelectProduct = (product: IProduct) => {
    setProductSelected(product);
  };
  const directionCallback = (event: any) => {
    setDirection(event);
  };
  useEffect(() => {
    if (!selectedPoint) return;
    setDirection(undefined);
    setIsrenderPath(false);
    setMatrix(undefined);
  }, [selectedPoint]);
  const [direction, setDirection] = useState<any>(undefined);
  useEffect(() => {
    if (!productSelected) return;
    const result: any = [];
    MOCK_BRANCH.forEach((e) => {
      e.image.forEach((el) => {
        if (el.name === productSelected.name) {
          result.push(e);
        }
      });
    });
    setDataShow(result);
  }, [productSelected]);
  return (
    <div>
      <SearchBar
        handleSelectProduct={handleSelectProduct}
        suggestion={suggestion}
        setSuggestion={setSuggestion}
        data={GEO_ITEM_DATA_MOCK}
      />
      {productSelected && selectedPoint && (
        <ProductDialog
          productSelected={productSelected}
          selectedPoint={selectedPoint}
        />
      )}
      {selectedPoint ? (
        <BranchlocatorDialog
          description={selectedPoint.description}
          title={selectedPoint.name}
          contact={selectedPoint.contact}
          renderPath={() => setIsrenderPath(true)}
          matrix={matrix}
          image={selectedPoint.image ?? ''}
          css={
            productSelected
              ? { margin: '220px 20px' }
              : { margin: '80px 20px' }
          }
        />
      ) : null}
      <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API}`}
        libraries={DEFAULT_ALLOW_LIB}
      >
        <GoogleMap
          onClick={() => setSuggestion([])}
          mapContainerStyle={{
            height: '100vh',
            width: '100vw',
          }}
          onLoad={(e) => setMaps(e)}
          zoom={12}
          center={DEFAULT_CENTER}
          options={{
            styles: mapsStyle,
            disableDefaultUI: true,
          }}
        >
          {maps && (
            <div>
              {selectedPoint && !direction && (
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
              {productSelected &&
                dataShow.map((mk: any, index) => {
                  return (
                    <InfoWindow
                      key={index}
                      position={{
                        lat: mk.lat,
                        lng: mk.lng,
                      }}
                    >
                      <SInfo onClick={() => setSelectedPoint(mk)}>
                        {mk.image.map((e: any, i: number) => {
                          return (
                            <div
                              style={{
                                width: '100%',
                                padding: '5px 0px',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                              key={i}
                            >
                              <img
                                style={{
                                  width: '100px',
                                  marginRight: '10px',
                                }}
                                alt={e.name}
                                src={e.src}
                              />
                              <div className="des">
                                <div className="name">{e.name}</div>
                              </div>
                            </div>
                          );
                        })}
                      </SInfo>
                    </InfoWindow>
                  );
                })}

              <Marker position={DEFAULT_CENTER} />
              {MOCK_BRANCH.map((mk: any, index) => {
                return (
                  <Marker
                    onClick={() => setSelectedPoint(mk)}
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
export default GeoMarketing;
const SInfo = styled.div`
  cursor: pointer;
  line-height: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  & > img {
    height: 40px;
  }
  & > div {
    &.des {
      height: 100%;
      margin-left: 10px;
      & > div.price {
        font-size: 16px;
        font-weight: bold;
      }
      & > div.name {
        display: flex;
        & > div {
          margin-left: 5px;
          font-weight: bold;
          color: red;
        }
      }
      & > div.stock {
        font-weight: bold;
        color: green;
        &.out {
          color: red;
        }
        font-size: 8px;
      }
    }
  }
`;
