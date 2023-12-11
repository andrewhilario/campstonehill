const grayscaleMapStyle = [
  {
    width: "100%",
    height: "500px"
  },
  {
    elementType: "geometry",
    stylers: [
      {
        saturation: -100
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#888888"
      }
    ]
  }
  //   {
  //     elementType: "labels.text.stroke",
  //     stylers: [
  //       {
  //         color: "#333333"
  //       }
  //     ]
  //   },
  //   {
  //     featureType: "administrative",
  //     elementType: "geometry.stroke",
  //     stylers: [
  //       {
  //         color: "#333333"
  //       }
  //     ]
  //   },
  //   {
  //     featureType: "administrative.land_parcel",
  //     elementType: "geometry.stroke",
  //     stylers: [
  //       {
  //         color: "#333333"
  //       }
  //     ]
  //   },
  //   {
  //     featureType: "administrative.land_parcel",
  //     elementType: "labels.text.fill",
  //     stylers: [
  //       {
  //         color: "#888888"
  //       }
  //     ]
  //   },
  //   {
  //     featureType: "administrative.neighborhood",
  //     elementType: "labels.text.fill",
  //     stylers: [
  //       {
  //         color: "#888888"
  //       }
  //     ]
  //   },

  // Add more style rules as needed
];

export { grayscaleMapStyle };
