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

  const parallaxFraction = 0; // Adjust the fraction for the scrolling effect
  const parallaxOffset = scrollY * parallaxFraction;

  return (
    <Box
      height={"100vh"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      clipPath={{
        base: "inset(25% 0% 25% 0%)",
        md: "inset(10% 23% 10% 23%)",
        lg: "inset(10% 23% 10% 23%)"
      }}
      position={"relative"}
    >
      <Image
        src="https://static.wixstatic.com/media/b07087_ce88951a76524572b63893c4f26d2dc5~mv2.jpg/v1/crop/x_0,y_242,w_3000,h_1515/fill/w_978,h_494,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/The%20Villa%20at%20Nuuk%20Taal.jpg"
        w={{
          base: "100%",
          md: "100%",
          lg: "100%"
        }}
        h={{
          base: "100vh",
          md: "100%",
          lg: "100%"
        }}
        transform={`translateY(${parallaxOffset}px)`}
        transition="transform 0.4s ease-out"
        position={"fixed"}
        top={{
          base: 0,
          lg: 0
        }}
        left={0}
        zIndex={0}
        objectFit={"cover"}
      />
      <Box
        position={"absolute"}
        bg="white"
        padding={{
          base: "2rem",
          md: "3rem",
          lg: "4rem"
        }}
        // middle of the screen
        top={"50%"}
        left={"50%"}
        // center the box
        transform={"translate(-50%, -50%)"}
        zIndex={1}
        w={{
          base: "70%",
          md: "80%",
          lg: "23%"
        }}
        textAlign={"center"}
      >
        <Text
          fontFamily={"Montserrat Variable"}
          fontSize={{
            base: "14px",
            md: "16px",
            lg: "24px"
          }}
        >
          OUR PLACE
        </Text>

        <Text
          fontFamily={"Montserrat Variable"}
          marginTop={{
            base: ".5rem",
            md: ".7rem",
            lg: "1rem"
          }}
          color={"#9a9a9a"}
          fontSize={{
            base: "12px",
            md: "14px",
            lg: "16px"
          }}
        >
          Nuuk is set within an idyllic 4-hectare lakeside country estate in
          Laurel, Batangas, with 130 meters of private shoreline.
        </Text>

        <Button
          marginTop={"2rem"}
          bg="white"
          boxShadow="inset 0 0 0 1px black"
          p={"26px"}
          fontFamily={"Montserrat Variable"}
          borderRadius={"0px"}
          fontSize={{
            base: "12px",
            lg: "14px"
          }}
          _hover={{
            background: "#e37f06",
            color: "white",
            textDecoration: "none",
            boxShadow: "inset 0 0 0 1px #e37f06" // Set the boxShadow property for the border
          }}
        >
          <Text>Continue Reading...</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default ParallaxComponent;
