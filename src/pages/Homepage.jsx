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

export default function Homepage() {
  return (
    <>
      <Helmet>
        <title>Nuuk Taal Botique Hotel in Laurel, Batangas</title>
      </Helmet>
      <Navbar />
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
        <Flex w="53%" m={"0 auto"}>
          <Box w={"100%"} marginTop={"5rem"}>
            <Image
              src="https://static.wixstatic.com/media/b07087_b5621f5fa8154b4992f12b9c1fae56e0~mv2_d_1824_1824_s_2.jpg/v1/fill/w_191,h_192,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Grey%20Logo%20Transparent.jpg"
              alt="logo"
              w="200px"
              h="200px"
              m={"0 auto"}
            />
          </Box>
          <Button
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
          </Button>
        </Flex>
      </Box>
      <Box>
        <Flex w="53%" m={"0 auto"}>
          <Image
            src="https://static.wixstatic.com/media/b07087_cabee4ae08c741f492afe06c85a8e2f7~mv2.jpg/v1/fill/w_980,h_634,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b07087_cabee4ae08c741f492afe06c85a8e2f7~mv2.jpg"
            alt="homepage"
          />
        </Flex>
      </Box>
      <Box marginTop={"2rem"}>
        <Flex w="53%" m={"0 auto"} direction={"column"}>
          <Heading
            fontFamily={"HvDTrial Brandon Grotesque Thin"}
            fontSize={"25px"}
            color={"#242323"}
            marginTop={"12rem"}
            textAlign={"center"}
          >
            OUR STORY
          </Heading>
          <Text
            fontFamily={"HvDTrial Brandon Grotesque Thin Italic"}
            fontSize={"18px"}
            color={"#242323"}
            marginTop={"3rem"}
            textAlign={"center"}
            w={"50%"}
            mx={"auto"}
          >
            Prior to its renovation into a charming boutique hotel, Nuuk served
            as a secluded family vacation home for over thirty years. Still in
            the family, we have a treasure trove of fond memories here, and are
            now looking forward to helping you create wonderful memories of your
            own.
          </Text>
          <Text
            fontFamily={"HvDTrial Brandon Grotesque Thin Italic"}
            fontSize={"18px"}
            color={"#242323"}
            marginTop={"3rem"}
            textAlign={"center"}
            w={"50%"}
            mx={"auto"}
          >
            Housing a collection of European and Asian artefacts, alongside a
            blend of modern Scandinavian furnishings and Filipiniana accents,
            the property's interiors reflect its rich history and personality.
          </Text>
          <Text
            fontFamily={"HvDTrial Brandon Grotesque Thin Italic"}
            fontSize={"18px"}
            color={"#242323"}
            marginTop={"3rem"}
            textAlign={"center"}
            w={"50%"}
            mx={"auto"}
          >
            Much like its namesake, the Nordic city of Nuuk, the resort is 'off
            the beaten path' but definitely a place well worth discovering.
          </Text>
        </Flex>
        <ParallaxComponent />
        {/* The Hotel */}
        <Box marginTop={"10rem"}>
          <Text
            fontFamily={"HvDTrial Brandon Grotesque Reg"}
            fontSize={"25px"}
            color={"#242323"}
            textAlign={"center"}
          >
            THE HOTEL
          </Text>
          <Image
            src="https://static.wixstatic.com/media/b07087_ce88951a76524572b63893c4f26d2dc5~mv2.jpg/v1/crop/x_0,y_242,w_3000,h_1515/fill/w_978,h_494,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/The%20Villa%20at%20Nuuk%20Taal.jpg"
            alt="hotel"
            w={"53%"}
            m="4rem auto"
          />
          <Text
            marginTop={"10rem"}
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Thin Italic"}
            fontSize={"18px"}
            w={"50%"}
            m={"0 auto"}
          >
            With breath-taking views of Taal Lake and Volcano, Nuuk offers the
            privacy of a luxurious holiday home combined with the perks of a
            high-end hotel.
          </Text>
          <Text
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Thin"}
            fontSize={"24px"}
            marginTop={"3rem"}
          >
            THE VILLA
          </Text>
          <Text
            w={"50%"}
            m={"0 auto"}
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Thin Italic"}
            fontSize={"18px"}
          >
            Archways clad in bricks and vintage hardwoods throughout the villa's
            architecturally unique interior juxtapose rustic grandeur with a
            cosy ambience. The Villa houses five of our eight luxury suites,
            along with our Ilulli Restaurant's main indoor dining space and bar.
            Villa Suites: Rooms 3 | 4 | 5 | 6 | 7
          </Text>
          <Text
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Thin"}
            fontSize={"24px"}
            marginTop={"3rem"}
          >
            THE LAKEHUS
          </Text>
          <Text
            w={"50%"}
            m={"0 auto"}
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Thin Italic"}
            fontSize={"18px"}
          >
            The Lakehus is a separate building housing Ilulli's al-fresco dining
            space and three of our guest suites with a contemporary feel.
            Lakehus Suites: Rooms 1 | 2 | 8
          </Text>
          <Text
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Thin"}
            fontSize={"24px"}
            marginTop={"3rem"}
          >
            THE FINER DETAILS
          </Text>
          <Flex align={"center"} direction={"column"}>
            <Text
              w={"50%"}
              m={"0 auto"}
              textAlign={"center"}
              fontFamily={"HvDTrial Brandon Grotesque Thin Italic"}
              fontSize={"14px"}
            >
              Eight (8) suites
            </Text>
            <Text
              fontFamily={"HvDTrial Brandon Grotesque Thin"}
              fontSize={"12px"}
            >
              Maximum capacity of 39 overnight guests
            </Text>
            <Text
              fontFamily={"HvDTrial Brandon Grotesque Thin"}
              fontSize={"12px"}
            >
              Fully air-conditioned
            </Text>
            <Text
              fontFamily={"HvDTrial Brandon Grotesque Thin"}
              fontSize={"12px"}
            >
              Wheel Chair Access
            </Text>
            <Text
              fontFamily={"HvDTrial Brandon Grotesque Thin"}
              fontSize={"12px"}
            >
              Infinity Swimming Pool
            </Text>
            <Text
              fontFamily={"HvDTrial Brandon Grotesque Thin"}
              fontSize={"12px"}
            >
              Beach access
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
