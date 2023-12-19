import { Box, Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";

export default function NewsLetter() {
  return (
    <Box bg={"#583102"} mt={"2rem"}>
      <Flex
        direction={"column"}
        align={"center"}
        w="53%"
        m={"0 auto"}
        p={"2rem"}
      >
        <Text
          color={"white"}
          fontSize={"2rem"}
          fontFamily={"Montserrat Variable"}
        >
          Join the Nuuk Taal Community
        </Text>
        <Text
          color={"white"}
          fontSize={"18px"}
          fontFamily={"Montserrat Variable"}
        >
          Join our email list and get access to our newsletters with our blog
          posts, specials deals exclusive to our subscribers.
        </Text>

        <Box w={"100%"} marginTop={"1rem"}>
          <FormLabel
            htmlFor="email"
            fontFamily={"Montserrat Variable"}
            color={"white"}
          >
            Enter your email here *
          </FormLabel>
          <Flex align={"center"} justify={"center"}>
            <Input
              type="email"
              name="email"
              w={"100%"}
              borderRadius={"0px"}
              borderColor={"#e37f06"}
              _focus={{
                borderColor: "#e37f06"
              }}
              _hover={{
                borderColor: "#e37f06"
              }}
              _active={{
                borderColor: "#e37f06"
              }}
            />
            <Button
              bg="#fc8d07"
              color={"white"}
              padding={"1rem"}
              fontFamily={"Montserrat Variable"}
              borderRadius={"0px"}
              fontSize={"16px"}
              _hover={{
                background: "#e37f06",
                color: "white",
                textDecoration: "none"
                // Set the boxShadow property for the border
              }}
              w={"30%"}
              mx={"auto"}
            >
              Sign Up
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
