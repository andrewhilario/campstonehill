import React, { useState, useEffect } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import backgroundImage from "../assets/images/The Villa at Nuuk Taal.webp";

const ParallaxComponent = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxFraction = -0.02; // Adjust the fraction for the scrolling effect
  const parallaxOffset = scrollY * parallaxFraction;

  return (
    <Box
      height={"100vh"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      clipPath={"inset(10% 23% 10% 23%)"}
      position={"relative"}
    >
      <Image
        src="https://static.wixstatic.com/media/b07087_ce88951a76524572b63893c4f26d2dc5~mv2.jpg/v1/crop/x_0,y_242,w_3000,h_1515/fill/w_978,h_494,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/The%20Villa%20at%20Nuuk%20Taal.jpg"
        w={"100%"}
        transform={`translateY(${parallaxOffset}px)`}
        transition="transform 0.4s ease-out"
        position={"fixed"}
        top={0}
        left={0}
        zIndex={0}
      />
      <Box
        position={"absolute"}
        bg="white"
        padding={"4rem"}
        // middle of the screen
        top={"50%"}
        left={"50%"}
        // center the box
        transform={"translate(-50%, -50%)"}
        zIndex={1}
        w={"23%"}
        textAlign={"center"}
      >
        <Text fontFamily={"HvDTrial Brandon Grotesque Thin"} fontSize={"24px"}>
          OUR PLACE
        </Text>

        <Text
          fontFamily={"HvDTrial Brandon Grotesque Thin Italic"}
          marginTop={"1rem"}
          color={"#ABABA9"}
        >
          Nuuk is set within an idyllic 4-hectare lakeside country estate in
          Laurel, Batangas, with 130 meters of private shoreline.
        </Text>

        <Button
          marginTop={"2rem"}
          bg="white"
          boxShadow="inset 0 0 0 1px black"
          p={"26px"}
          fontFamily={"HvDTrial Brandon Grotesque Thin"}
          borderRadius={"0px"}
          fontSize={"14px"}
          _hover={{
            background: "black",
            color: "white",
            textDecoration: "none",
            boxShadow: "inset 0 0 0 1px black" // Set the boxShadow property for the border
          }}
        >
          <Text>Continue Reading...</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default ParallaxComponent;
