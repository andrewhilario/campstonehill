/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function ThingsToDo() {
  return (
    <Flex
      justify={{
        base: "center",
        md: "space-between",
        lg: "space-between"
      }}
      w={{
        base: "100%",
        md: "65%",
        lg: "53%"
      }}
      m={"0 auto"}
      direction={{
        base: "column",
        md: "row",
        lg: "row"
      }}
    >
      <Flex
        w={{
          base: "100%",
          md: "90%",
          lg: "33%"
        }}
        direction={"column"}
        marginBottom={{
          base: "2rem",
          md: 0,
          lg: 0
        }}
      >
        <Box>
          <Text
            marginTop={"2.4rem"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontSize={"1.2rem"}
          >
            Lakefront Strolls
          </Text>
          <Text
            width={"70%"}
            marginTop={"1.2rem"}
            mx={"auto"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontWeight={"light"}
          >
            Discover the natural beauty of our surroundings by taking a walk or
            wading along our shores. Many birds like herons, egrets, and
            kingfishers (among many others) frequent our beach to catch fish.
            Your little ones can do the same with our kiddie fishing.
          </Text>
        </Box>
        <Box>
          <Text
            marginTop={"2.4rem"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontSize={"1.2rem"}
          >
            Leisure Activities
          </Text>
          <Text
            width={"70%"}
            marginTop={"1.2rem"}
            mx={"auto"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontWeight={"light"}
          >
            Take a dip in our infinity pool, relax in one of our nooks nestled
            in the gardens or the beach, play some cards at our lobby lounge,
            enjoy a drink on our viewing deck whilst taking in the lake views.
            We also have a Ping Pong Table and a Dartboard for some great fun.
          </Text>
        </Box>
      </Flex>
      <Flex
        w={{
          base: "100%",
          md: "90%",
          lg: "33%"
        }}
        direction={"column"}
        marginTop={{
          base: "2rem",
          md: 0,
          lg: 0
        }}
      >
        <Box padding={"3rem 1.4rem"} bg="#737373">
          <Text
            marginTop={"2.4rem"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontSize={"1.2rem"}
            color={"white"}
          >
            Discover Taal Lake
          </Text>
          <Text
            width={"70%"}
            marginTop={"1.2rem"}
            mx={"auto"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            color={"white"}
            fontWeight={"light"}
          >
            Taal Lake is well known for its beauty, mysteriousness and rich
            history. The breathtaking backdrop of mountains, calm water and the
            volcano at Taal Lake, on the Philippine island of Luzon, makes it
            one of the country's most popular tourist destinations. Located just
            thirty miles from Manila, Taal Lake fills the caldera of a massive
            prehistoric volcano with a fascinating geological history.
          </Text>
        </Box>
        <Box>
          <Text
            marginTop={"2.4rem"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontSize={"1.2rem"}
          >
            Kids' Activities
          </Text>
          <Text
            width={"70%"}
            marginTop={"1.2rem"}
            mx={"auto"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontWeight={"light"}
          >
            We are proud to be a family-friendly hotel. We have kiddie fishing,
            board games, Smart TVs with Netflix, garden sports such as badminton
            & volleyball, and a kiddie pool.
          </Text>
        </Box>
        <Button
          bg="#A1A09E"
          color={"white"}
          padding={"1rem"}
          fontFamily={"Montserrat Variable"}
          borderRadius={"0px"}
          fontSize={"16px"}
          _hover={{
            background: "white",
            color: "black",
            textDecoration: "none",
            boxShadow: "inset 0 0 0 1px black" // Set the boxShadow property for the border
          }}
          marginTop={"2rem"}
          mx={"auto"}
        >
          Menu of Services
        </Button>
      </Flex>
      <Flex
        w={{
          base: "100%",
          md: "90%",
          lg: "33%"
        }}
        direction={"column"}
      >
        <Box>
          <Text
            marginTop={"2.4rem"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontSize={"1.2rem"}
          >
            Tagaytay Ridge
          </Text>
          <Text
            width={"70%"}
            marginTop={"1.2rem"}
            mx={"auto"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontWeight={"light"}
          >
            Our hotel is only 25 minutes from the popular Tagaytay mountain
            ridge, which offers a birds-eye panoramic view of Taal Lake and
            Volcano.
          </Text>
        </Box>
        <Box>
          <Text
            marginTop={"2.4rem"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontSize={"1.2rem"}
          >
            Adventure Activities
          </Text>
          <Text
            width={"70%"}
            marginTop={"1.2rem"}
            mx={"auto"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontWeight={"light"}
          >
            Bring your mountain bikes and explore the roads surrounding the
            lake. After the 2020 eruption, the views of the changed landscape of
            Taal Volcano towards Agoncillo are worth the ride. Or if exploring
            the lake is what you prefer, we have kayaking from our beachfront
            and boat tours that can be arranged for you in collaboration with
            the Taal Yacht Club!
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
