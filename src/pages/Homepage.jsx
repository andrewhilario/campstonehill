/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import React from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text
} from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Parallax from "../components/Parallax";
import ParallaxComponent from "../components/Parallax";
import Services from "../components/Services";
import ThingsToDo from "../components/ThingsToDo";
import NewsLetter from "../components/NewsLetter";
import GoogleMaps from "../components/GoogleMaps";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Logo from "../assets/images/campstonehilllogo.webp";
import HeaderImage from "../assets/images/header.jpg";
import HotelImage from "../assets//images/hotel.jpg";

export default function Homepage() {
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
        <title>Camp Stone Hill</title>
      </Helmet>
      <Navbar />
      <Box
        className={loading ? "slow-blink" : "loaded"}
        minH="100vh"
        w={{
          base: "100%",
          md: "100%",
          lg: "100%"
        }}
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
      {/* Socials */}
      <Flex
        gap={"2.7rem"}
        flexDirection={"column"}
        position={"fixed"}
        right={{
          base: "10px",
          md: "25px",
          lg: "50px"
        }}
        top={"45%"}
        zIndex={1}
      >
        <Link
          _hover={{
            textDecoration: "none"
          }}
          href="https://www.facebook.com/campstonehill"
          w={{
            base: "24px",
            md: "24px",
            lg: "30px"
          }}
          h={{
            base: "24px",
            md: "24px",
            lg: "30px"
          }}
        >
          <FaFacebookF
            style={{
              width: "100%",
              height: "100%",
              color: "#e37f06"
            }}
          />
        </Link>
        <Link
          _hover={{ textDecoration: "none" }}
          w={{
            base: "24px",
            md: "18px",
            lg: "30px"
          }}
          h={{
            base: "24px",
            md: "18px",
            lg: "30px"
          }}
        >
          <FaInstagram
            style={{
              color: "#e37f06",
              width: "100%",
              height: "100%"
            }}
          />
        </Link>
      </Flex>
      <Box
        w={{
          base: "100%",
          md: "100%",
          lg: "100%"
        }}
        overflow={"hidden"}
      >
        <Flex
          w={{
            base: "70%",
            md: "65%",
            lg: "53%"
          }}
          m={"0 auto"}
          id="home"
        >
          <Box w={"100%"} marginTop={"5rem"}>
            <Image
              src={Logo}
              alt="logo"
              w={{
                base: "100px",
                md: "200px",
                lg: "300px"
              }}
              h={{
                base: "80px",
                md: "200px",
                lg: "200px"
              }}
              m={"2rem auto"}
            />
          </Box>
          {/* <Button
            marginTop={"7rem"}
            marginRight={"-10rem"}
            background="black"
            color="white"
            fontFamily={"Montserrat Variable"}
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
      <Box
        w={{
          base: "100%",
          md: "100%",
          lg: "100%"
        }}
      >
        <Flex
          w={{
            base: "100%",
            md: "65%",
            lg: "100%"
          }}
          m={"0 auto"}
          height={"70%"}
        >
          <Image src={HeaderImage} alt="homepage" w={"100%"} />
        </Flex>
      </Box>

      <Box
        marginTop={"2rem"}
        w={{
          base: "100%",
          md: "100%",
          lg: "100%"
        }}
      >
        <Flex
          w={{
            base: "75%",
            md: "65%",
            lg: "53%"
          }}
          mx={"auto"}
          marginTop={"5rem"}
          marginBottom={{
            base: "0rem",
            md: "5rem",
            lg: "8rem"
          }}
          id="about"
          direction={"column"}
        >
          <Heading
            fontFamily={"Montserrat Variable"}
            fontSize={"25px"}
            color={"#e37f06"}
            marginTop={{
              base: "1rem",
              md: "5rem",
              lg: "12rem"
            }}
            textAlign={"center"}
          >
            OUR STORY
          </Heading>
          <Text
            fontFamily={"Montserrat Variable"}
            fontSize={{
              base: "14px",
              md: "16px",
              lg: "18px"
            }}
            color={"#242323"}
            marginTop={"3rem"}
            textAlign={"center"}
            w={{
              base: "100%",
              md: "65%",
              lg: "53%"
            }}
            mx={"auto"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
            numquam! Deleniti dolore deserunt autem voluptates vero enim eum
            consequatur minima illum fuga aliquam fugit sint expedita aperiam,
            commodi at nobis?
          </Text>
          <Text
            fontFamily={"Montserrat Variable"}
            fontSize={{
              base: "14px",
              md: "16px",
              lg: "18px"
            }}
            color={"#242323"}
            marginTop={"3rem"}
            textAlign={"center"}
            w={{
              base: "100%",
              md: "65%",
              lg: "53%"
            }}
            mx={"auto"}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatem, quam natus. Sit, veniam accusantium! Ab alias laborum
            sequi aliquid odio?
          </Text>
          <Text
            fontFamily={"Montserrat Variable"}
            fontSize={{
              base: "14px",
              md: "16px",
              lg: "18px"
            }}
            color={"#242323"}
            marginTop={"3rem"}
            textAlign={"center"}
            w={{
              base: "100%",
              md: "65%",
              lg: "53%"
            }}
            mx={"auto"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            aut dignissimos magnam accusamus doloribus numquam!
          </Text>
        </Flex>
        <ParallaxComponent />
        {/* The Hotel */}
        <Box>
          <Text
            id="hotel"
            fontFamily={"Montserrat Variable"}
            fontSize={"25px"}
            color={"#242323"}
            textAlign={"center"}
            marginTop={{
              base: "0",
              md: "5rem",
              lg: "10rem"
            }}
          >
            THE HOTEL
          </Text>
          <Image
            src={HotelImage}
            alt="hotel"
            w={{
              base: "100%",
              md: "90%",
              lg: "100%"
            }}
            m="4rem auto"
          />
          <Text
            marginTop={"10rem"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontSize={{
              base: "14px",
              md: "16px",
              lg: "18px"
            }}
            fontWeight={"light"}
            w={{
              base: "100%",
              md: "65%",
              lg: "50%"
            }}
            m={"0 auto"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel
            totam debitis laudantium quibusdam. Hic atque commodi ut aperiam
            quia!
          </Text>
          <Text
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontSize={{
              base: "16px",
              md: "18px",
              lg: "24px"
            }}
            marginTop={"3rem"}
          >
            THE VILLA
          </Text>
          <Text
            w={{
              base: "100%",
              md: "65%",
              lg: "50%"
            }}
            m={"0 auto"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontSize={{
              base: "12px",
              md: "16px",
              lg: "18px"
            }}
            fontWeight={"light"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            a sapiente excepturi unde voluptatum cumque veniam beatae asperiores
            officia sed, quasi, ipsum odio quidem, eveniet quo corrupti natus
            exercitationem aperiam?.
          </Text>
          <Text
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontSize={{
              base: "16px",
              md: "18px",
              lg: "24px"
            }}
            marginTop={"3rem"}
          >
            THE LAKEHUS
          </Text>
          <Text
            w={{
              base: "100%",
              md: "65%",
              lg: "50%"
            }}
            m={"0 auto"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontSize={{
              base: "12px",
              md: "16px",
              lg: "18px"
            }}
            fontWeight={"light"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            aperiam corporis error? Perspiciatis mollitia tempora eum, aliquid
            at consectetur alias, hic, illum quos doloribus dolor. Lakehus
            Suites: Rooms 1 | 2 | 8
          </Text>
          <Text
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontSize={{
              base: "16px",
              md: "18px",
              lg: "24px"
            }}
            marginTop={"3rem"}
          >
            THE FINER DETAILS
          </Text>
          <Flex align={"center"} direction={"column"}>
            <Text
              w={{
                base: "100%",
                md: "65%",
                lg: "50%"
              }}
              m={"0 auto"}
              textAlign={"center"}
              fontFamily={"Montserrat Variable"}
              fontSize={"12px"}
            >
              Lorem ipsum dolor sit amet.
            </Text>
            <Text fontFamily={"Montserrat Variable"} fontSize={"12px"}>
              Lorem ipsum dolor sit amet.
            </Text>
            <Text fontFamily={"Montserrat Variable"} fontSize={"12px"}>
              Lorem ipsum dolor sit amet.
            </Text>
            <Text fontFamily={"Montserrat Variable"} fontSize={"12px"}>
              Lorem ipsum dolor sit amet.
            </Text>
            <Text fontFamily={"Montserrat Variable"} fontSize={"12px"}>
              Lorem ipsum dolor sit amet.
            </Text>
            <Text fontFamily={"Montserrat Variable"} fontSize={"12px"}>
              Lorem ipsum dolor sit amet.
            </Text>
          </Flex>
        </Box>
        <Services />
        <ThingsToDo />
        <NewsLetter />
        <GoogleMaps />
        <Footer />
      </Box>
    </>
  );
}
