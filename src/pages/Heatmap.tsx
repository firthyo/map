import {
  GoogleMap,
  LoadScript,
  Marker,
  HeatmapLayer,
} from "@react-google-maps/api";
import { useRef, useState } from "react";
import { road, landmark, labels, theme } from "../config/maps";
import MOCK_DATA from "../data/MOCK_DATA.json";
interface IDataHeatmap {
  id: number;
  first_name: string;
  last_name: string;
  items: string;
  lat: number;
  lng: number;
}
const DEFAULT_CENTER = { lat: 13.7563, lng: 100.5018 };

const Heatmap = () => {
  const [maps, setMaps] = useState<google.maps.Map | undefined>(undefined);
  const data = useRef<IDataHeatmap[] | any>(MOCK_DATA);
  const mapsStyle = [
    ...road[3],
    ...landmark[1],
    ...labels[3],
    ...theme["standard"],
  ];
  return (
    <div>
      <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API}`}
        libraries={["places", "visualization"]}
      >
        <GoogleMap
          mapContainerStyle={{
            height: "100vh",
            width: "100vw",
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
              <Marker position={DEFAULT_CENTER} />;
              <HeatmapLayer
                // required
                data={data.current.map(
                  (e: IDataHeatmap) => new google.maps.LatLng(e.lat, e.lng)
                )}
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
