import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Box bg="#bd6a05" p={"1rem"}>
      <Flex
        align={"center"}
        justify={"center"}
        w={"70%"}
        m={"0 auto"}
        gap={"1rem"}
      >
        <Text color={"#fff"} fontFamily={"Montserrat Variable"}>
          booking@campstonehill.ph
        </Text>
        <Text color={"#fff"}>|</Text>
        <Text color={"#fff"} fontFamily={"Montserrat Variable"}>
          Haligyunan corner PPC Roads, Sitio Rumaguit, Brgy San Miguel, Baras,
          Philippines
        </Text>
        <Text color={"#fff"}>|</Text>
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
        color={"white"}
        fontFamily={"Montserrat Variable"}
        textAlign={"center"}
      >
        © 2023 by Camp Stone Hill
      </Text>
    </Box>
  );
}
