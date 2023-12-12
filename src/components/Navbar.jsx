import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import anime from "animejs";
import $ from "jquery";

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
          href="/"
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
          onClick={() => {
            const element = document.getElementById("home");
            if (element) {
              element.style.scrollBehavior = "smooth";
              element.scrollIntoView({
                block: "start",
                inline: "nearest"
              });
              // Reset scroll behavior after scrolling
              setTimeout(() => {
                element.style.scrollBehavior = "auto";
              }, 1000); // Adjust the delay time if needed
            }
          }}
        >
          Home
        </Link>
        <Link
          href="/#about"
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
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById("about");
            if (element) {
              $("html, body").animate(
                {
                  scrollTop: $(element).offset().top - 100
                },
                500
              );
            }
          }}
        >
          About
        </Link>
        <Link
          href="#hotel"
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
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById("hotel");
            if (element) {
              $("html, body").animate(
                {
                  scrollTop: $(element).offset().top - 160
                },
                300
              );
            }
          }}
        >
          Hotel
        </Link>
        <Link
          href="/#services"
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
          onClick={(e) => {
            window.location.href = "/#services";
            e.preventDefault();
            const element = document.getElementById("services");

            if (element) {
              $("html, body").animate(
                {
                  scrollTop: $(element).offset().top - 100
                },
                300
              );
            }
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
          href="/ilulli"
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
          href="/events"
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
          href="/info"
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
          href="/contact"
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
          href="/careers"
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
          href="/blog"
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
