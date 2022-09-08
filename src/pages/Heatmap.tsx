import {
  GoogleMap,
  LoadScript,
  Marker,
  HeatmapLayer,
} from '@react-google-maps/api';
import { useEffect, useRef, useState } from 'react';
import { road, landmark, labels, theme } from '../config/maps';
import HEAT_MAP_DATA_MOCK from '../data/HEAT_MAP_DATA_MOCK.json';
import MOCK_B from '../data/BRANCH_LOCATOR_DATA_MOCK.json';
import UnselectedStore from '../asset/icons/UnselectedStore.png';
import SearchBar from '../components/SearchBar/SearchBar';
import ProductDialog from '../components/ProductDialog/ProductDialog';
import { ITEM_DATA_MOCK } from '../data/ITEM_DATA_MOCK';
interface IDataHeatmap {
  id: number;
  first_name: string;
  last_name: string;
  items: string;
  lat: number;
  lng: number;
}
interface IProduct {
  name: string;
  image: string;
}
const DEFAULT_CENTER = { lat: 13.7563, lng: 100.5018 };
const DEFAULT_LIBRARIES: (
  | 'places'
  | 'visualization'
  | 'geometry'
  | 'drawing'
  | 'localContext'
)[] = ['places', 'visualization'];
const Heatmap = () => {
  const [maps, setMaps] = useState<google.maps.Map | undefined>(
    undefined,
  );
  const [productSelected, setProductSelected] = useState<
    IProduct | undefined
  >(undefined);
  const [suggestion, setSuggestion] = useState<any[]>([]);
  const [heatData, setHeatData] = useState<any>();
  const data = useRef<IDataHeatmap[] | any>(HEAT_MAP_DATA_MOCK);
  const mapsStyle = [
    ...road[3],
    ...landmark[1],
    ...labels[3],
    ...theme['standard'],
  ];
  const [selectedPoint, setSelectedPoint] = useState<any>();
  useEffect(() => {
    if (!data) return;
    const result: any = {};
    data.current.forEach((e: any) => {
      if (result[e.cardType]) {
        result[e.cardType].push(e);
      } else {
        result[e.cardType] = [e];
      }
    });
    setHeatData(result);
  }, [data]);
  const handleSelectProduct = (product: IProduct) => {
    setProductSelected(product);
  };
  return (
    <div>
      <SearchBar
        handleSelectProduct={handleSelectProduct}
        suggestion={suggestion}
        setSuggestion={setSuggestion}
      />
      {productSelected && (
        <ProductDialog productSelected={productSelected} />
      )}
      <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API}`}
        libraries={DEFAULT_LIBRARIES}
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
        >
          {maps && (
            <div>
              {MOCK_B.map((mk: any, index) => {
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
              <Marker position={DEFAULT_CENTER} />;
              <HeatmapLayer
                // required
                data={
                  productSelected?.name
                    ? heatData &&
                      heatData[productSelected.name].map(
                        (e: IDataHeatmap) =>
                          new google.maps.LatLng(e.lat, e.lng),
                      )
                    : data.current.map(
                        (e: IDataHeatmap) =>
                          new google.maps.LatLng(e.lat, e.lng),
                      )
                }
              />
              ;
            </div>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
export default Heatmap;
