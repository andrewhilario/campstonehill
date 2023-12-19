import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/images/campstonehilllogo.webp";

export default function Footer() {
  return (
    <Box
      bg="#bd6a05"
      p={"1rem"}
      w={{
        base: "100%",
        md: "100%",
        lg: "100%"
      }}
    >
      <Flex
        align={"center"}
        justify={"center"}
        w={"70%"}
        m={"0 auto"}
        gap={"1rem"}
        direction={{
          base: "column",
          md: "row",
          lg: "row"
        }}
      >
        <Image
          src={Logo}
          w={"150px"}
          h={"100px"}
          marginTop={{
            base: "1rem",
            md: "0",
            lg: "0"
          }}
          display={{
            base: "block",
            md: "none",
            lg: "none"
          }}
        />

        <Text color={"#fff"} fontFamily={"Montserrat Variable"}>
          booking@campstonehill.ph
        </Text>
        <Text
          color={"#fff"}
          display={{
            base: "none",
            md: "block",
            lg: "block"
          }}
        >
          |
        </Text>
        <Text
          color={"#fff"}
          textAlign={"center"}
          fontFamily={"Montserrat Variable"}
        >
          Haligyunan corner PPC Roads, Sitio Rumaguit, Brgy San Miguel, Baras,
          Philippines
        </Text>
        <Text
          color={"#fff"}
          display={{
            base: "none",
            md: "block",
            lg: "block"
          }}
        >
          |
        </Text>
        <Flex align={"center"} justify={"center"} gap={"1rem"}>
          <Text
            color={"#fff"}
            fontFamily={"Montserrat Variable"}
            textDecoration={"underline"}
          >
            +63(0)98 988 9776
          </Text>
        </Flex>
      </Flex>
      <Text
        marginTop={{
          base: "1rem",
          md: "0",
          lg: "0"
        }}
        color={"white"}
        fontFamily={"Montserrat Variable"}
        textAlign={"center"}
      >
        © 2023 by Camp Stone Hill
      </Text>
    </Box>
  );
}
