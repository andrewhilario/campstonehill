import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { grayscaleMapStyle } from "./constants/mapStyle";
import { Box, Text } from "@chakra-ui/react";

const containerStyle = {
  width: "100%",
  height: "500px"
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const marker = {
  lat: 14.532461336617004,
  lng: 121.27886850449886,
  zoom: 10
};

export default function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(marker);
    map.fitBounds(bounds);
    // set the map zoom on load
    map.setZoom(10);

    // set the map center on load
    map.setCenter(marker);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <Box
      w={{
        base: "100%",
        md: "100%",
        lg: "100%"
      }}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={marker}
        options={{
          styles: grayscaleMapStyle
        }}
        zoom={11}
        //   onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={marker} title="Marker Title">
          {/* You can customize the content inside the marker if needed */}
          <Box
            bg="white"
            color="black"
            p={2}
            borderRadius="md"
            boxShadow="md"
            textAlign="center"
          >
            Nuuk Taal
          </Box>
        </Marker>
      </GoogleMap>
    </Box>
  ) : (
    <></>
  );
}
