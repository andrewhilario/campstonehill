import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box background="#252322" pos={"fixed"} w={"100%"} zIndex={1}>
      <Flex
        m={"0 auto"}
        align={"center"}
        justify={"space-between"}
        padding={"1rem"}
        w={"53%"}
      >
        <Link
          color={"white"}
          textDecoration={"none"}
          textTransform={"uppercase"}
          fontSize={"14px"}
          fontWeight={"normal"}
          padding={"0.8rem"}
          fontFamily={"HvDTrial Brandon Grotesque Thin"}
          _hover={{
            color: "#ABABA9",
            textDecoration: "none"
          }}
        >
          Home
        </Link>
        <Link
          color={"white"}
          textDecoration={"none"}
          textTransform={"uppercase"}
          fontSize={"14px"}
          padding={"0.8rem"}
          fontFamily={"HvDTrial Brandon Grotesque Thin"}
          _hover={{
            color: "#ABABA9",
            textDecoration: "none"
          }}
        >
          About
        </Link>
        <Link
          color={"white"}
          textDecoration={"none"}
          textTransform={"uppercase"}
          fontSize={"14px"}
          padding={"0.8rem"}
          fontFamily={"HvDTrial Brandon Grotesque Thin"}
          _hover={{
            color: "#ABABA9",
            textDecoration: "none"
          }}
        >
          Hotel
        </Link>
        <Link
          color={"white"}
          textDecoration={"none"}
          textTransform={"uppercase"}
          fontSize={"14px"}
          padding={"0.8rem"}
          fontFamily={"HvDTrial Brandon Grotesque Thin"}
          _hover={{
            color: "#ABABA9",
            textDecoration: "none"
          }}
        >
          Services
        </Link>
        <Link
          href="/gallery"
          color={"white"}
          textDecoration={"none"}
          textTransform={"uppercase"}
          fontSize={"14px"}
          padding={"0.8rem"}
          fontFamily={"HvDTrial Brandon Grotesque Thin"}
          _hover={{
            color: "#ABABA9",
            textDecoration: "none"
          }}
        >
          Gallery
        </Link>
        <Link
          color={"white"}
          textDecoration={"none"}
          textTransform={"uppercase"}
          fontSize={"14px"}
          padding={"0.8rem"}
          fontFamily={"HvDTrial Brandon Grotesque Thin"}
          _hover={{
            color: "#ABABA9",
            textDecoration: "none"
          }}
        >
          Ilulli Restaurant
        </Link>
        <Link
          color={"white"}
          textDecoration={"none"}
          textTransform={"uppercase"}
          fontSize={"14px"}
          padding={"0.8rem"}
          fontFamily={"HvDTrial Brandon Grotesque Thin"}
          _hover={{
            color: "#ABABA9",
            textDecoration: "none"
          }}
        >
          Events
        </Link>
        <Link
          color={"white"}
          textDecoration={"none"}
          textTransform={"uppercase"}
          fontSize={"14px"}
          padding={"0.8rem"}
          fontFamily={"HvDTrial Brandon Grotesque Thin"}
          _hover={{
            color: "#ABABA9",
            textDecoration: "none"
          }}
        >
          Info
        </Link>
        <Link
          color={"white"}
          textDecoration={"none"}
          textTransform={"uppercase"}
          fontSize={"14px"}
          padding={"0.8rem"}
          fontFamily={"HvDTrial Brandon Grotesque Thin"}
          _hover={{
            color: "#ABABA9",
            textDecoration: "none"
          }}
        >
          Contact
        </Link>
        <Link
          color={"white"}
          textDecoration={"none"}
          textTransform={"uppercase"}
          fontSize={"14px"}
          padding={"0.8rem"}
          fontFamily={"HvDTrial Brandon Grotesque Thin"}
          _hover={{
            color: "#ABABA9",
            textDecoration: "none"
          }}
        >
          Careers
        </Link>
        <Link
          color={"white"}
          textDecoration={"none"}
          textTransform={"uppercase"}
          fontSize={"14px"}
          padding={"0.8rem"}
          fontFamily={"HvDTrial Brandon Grotesque Thin"}
          _hover={{
            color: "#ABABA9",
            textDecoration: "none"
          }}
        >
          Blog
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
