import React from "react";
import Navbar from "../components/Navbar";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import ImageGallery from "react-image-gallery";
import images from "../components/constants/images";
import "react-image-gallery/styles/css/image-gallery.css";
import GoogleMaps from "../components/GoogleMaps";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import Logo from "../assets/images/campstonehilllogo.webp";

export default function Activities() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading delay (replace with your actual data fetching or other logic)
    const delay = setTimeout(() => {
      setLoading(false);
    }, 700);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(delay);
  }, []);
  return (
    <>
      <Helmet>
        <title> Activities | Camp Stone Hill</title>
      </Helmet>
      <Navbar />
      <Box
        className={loading ? "slow-blink" : "loaded"}
        minH="100vh"
        w={"100%"}
        justifyContent="center"
        alignItems="center"
        position={"fixed"}
        zIndex={1}
        top={0}
        left={0}
        right={0}
        bottom={0}
        background={"white"}
        // display={loading ? "flex" : "none"}
      ></Box>
      <Flex
        gap={"2.7rem"}
        flexDirection={"column"}
        position={"fixed"}
        right={"25px"}
        top={"45%"}
        zIndex={1}
      >
        <Link
          _hover={{
            textDecoration: "none"
          }}
        >
          <FaFacebookF
            style={{
              color: "black",
              fontSize: "2rem"
            }}
          />
        </Link>
        <Link _hover={{ textDecoration: "none" }}>
          <FaInstagram
            style={{
              color: "black",
              fontSize: "2rem"
            }}
          />
        </Link>
      </Flex>
      <Box>
        <Flex w="53%" m={"0 auto"} id="home">
          <Box w={"100%"} marginTop={"6rem"}>
            <Image src={Logo} alt="logo" w="300px" h="200px" m={"2rem auto"} />
          </Box>
          {/* <Button
            marginTop={"7rem"}
            marginRight={"-10rem"}
            background="black"
            color="white"
            fontFamily={"HvDTrial Brandon Grotesque Thin"}
            borderRadius={"0px"}
            p={"26px"}
            fontSize={"18px"}
            _hover={{
              background: "white",
              color: "black",
              textDecoration: "none",
              boxShadow: "inset 0 0 0 1px black" // Set the boxShadow property for the border
            }}
          >
            BOOK NOW <MdChevronRight />
          </Button> */}
        </Flex>
      </Box>
      <Box w={"53%"} m={"0 auto"} marginBottom={"5rem"}>
        <ImageGallery
          items={images}
          showThumbnails
          thumbnailPosition={"bottom"}
          showFullscreenButton={false}
          showPlayButton={false}
          thumbnailWidth={"100%"}
          renderRightNav={(onClick, disabled) => {
            return (
              <GoChevronRight
                style={{
                  color: "white",
                  fontSize: "4rem",
                  position: "absolute",
                  right: "0%",
                  top: "44%",
                  zIndex: 1
                }}
                onClick={onClick}
                disabled={disabled}
              />
            );
          }}
          renderLeftNav={(onClick, disabled) => {
            return (
              <GoChevronLeft
                style={{
                  color: "white",
                  fontSize: "4rem",
                  position: "absolute",
                  left: "0%",
                  top: "46%",
                  zIndex: 1
                }}
                onClick={onClick}
                disabled={disabled}
              />
            );
          }}
          onMouseOver={(e) => {
            // add a gray opacity to the image
            e.target.style.opacity = 0.5;
            e.target.style.border = "none";
          }}
          onMouseLeave={(e) => {
            // remove the opacity
            e.target.style.opacity = 1;
            e.target.style.border = "none";
          }}
        />
      </Box>

      <GoogleMaps />
      <Footer />
    </>
  );
}
