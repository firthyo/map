import {
  GoogleMap,
  LoadScript,
  Marker,
  HeatmapLayer,
} from "@react-google-maps/api";
import { useState } from "react";
import { heatMapData } from "../data/consumer";
import MOCK_DATA from "../data/MOCK_DATA.json";
const DEFAULT_CENTER = { lat: 13.7563, lng: 100.5018 };

const Heatmap = () => {
  const [maps, setMaps] = useState<google.maps.Map | undefined>(undefined);

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
          zoom={14}
          center={DEFAULT_CENTER}
          options={{
            disableDefaultUI: true,
          }}
        >
          {maps && (
            <div>
              <Marker position={DEFAULT_CENTER} />;
              <HeatmapLayer
                // required
                data={MOCK_DATA.map(
                  (e) => new google.maps.LatLng(e.lat, e.lng)
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
