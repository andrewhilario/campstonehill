import { Box, Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";

export default function NewsLetter() {
  return (
    <Box bg={"teal.500"} mt={"2rem"}>
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
          fontFamily={"HvDTrial Brandon Grotesque Reg"}
        >
          Join the Nuuk Taal Community
        </Text>
        <Text
          color={"white"}
          fontSize={"18px"}
          fontFamily={"HvDTrial Brandon Grotesque Reg"}
        >
          Join our email list and get access to our newsletters with our blog
          posts, specials deals exclusive to our subscribers.
        </Text>

        <Box w={"100%"} marginTop={"1rem"}>
          <FormLabel
            htmlFor="email"
            fontFamily={"HvDTrial Brandon Grotesque Thin"}
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
              borderColor={"black"}
              _focus={{
                borderColor: "black"
              }}
              _hover={{
                borderColor: "black"
              }}
              _active={{
                borderColor: "black"
              }}
            />
            <Button
              bg="#A1A09E"
              color={"white"}
              padding={"1rem"}
              fontFamily={"HvDTrial Brandon Grotesque Thin"}
              borderRadius={"0px"}
              fontSize={"16px"}
              _hover={{
                background: "black",
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
