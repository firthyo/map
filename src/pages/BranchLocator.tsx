import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const DEFAULT_CENTER = { lat: 13.7563, lng: 100.5018 };
const BranchLocator = () => {
  const [maps, setMaps] = useState<google.maps.Map | undefined>(undefined);

  return (
    <div>
      <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API}`}
        // libraries={["places"]}
      >
        <GoogleMap
          mapContainerStyle={{
            height: "100vh",
            width: "100vw",
          }}
          onLoad={(e) => setMaps(e)}
          zoom={8}
          center={DEFAULT_CENTER}
          options={{
            disableDefaultUI: true,
          }}
        >
          {maps && (
            <div>
              <Marker position={DEFAULT_CENTER} />
            </div>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
export default BranchLocator;
