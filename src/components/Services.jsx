/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import Dining from "../assets/svgs/dining.svg";
import Garden from "../assets/svgs/garden.svg";
import Pool from "../assets/svgs/pool.svg";
import Wifi from "../assets/svgs/wifi.svg";
import Housekeeping from "../assets/svgs/housekeeping.svg";

export default function Services() {
  return (
    <Box w="100%" marginTop={"4rem"}>
      <Text
        textAlign={"center"}
        fontFamily={"HvDTrial Brandon Grotesque Reg"}
        fontSize={"2rem"}
      >
        OUR SERVICES
      </Text>
      <Flex justify={"space-between"} w={"53%"} m={"0 auto"}>
        <Box w={"33%"}>
          <Image src={Dining} alt="dining" w={"50px"} h={"50px"} m={"0 auto"} />
          <Text
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Reg"}
            fontSize={"1.2rem"}
          >
            Dining
          </Text>
          <Text
            width={"80%"}
            m={"0 auto"}
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Thin Italic"}
          >
            We offer complimentary breakfast. We are also open for lunch,
            merienda and dinner, exculsively for our checked-in guests, at
            Ilulli Restaurant
          </Text>
        </Box>

        <Box w={"33%"}>
          <Image src={Garden} alt="dining" w={"50px"} h={"50px"} m={"0 auto"} />
          <Text
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Reg"}
            fontSize={"1.2rem"}
          >
            Gardens & Nooks
          </Text>
          <Text
            width={"80%"}
            m={"0 auto"}
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Thin Italic"}
          >
            Our guests have access to our lakeview gardens, private beachfront
            and privacy nooks dotted around the grounds
          </Text>
        </Box>
        <Box w={"33%"}>
          <Image src={Pool} alt="dining" w={"50px"} h={"50px"} m={"0 auto"} />
          <Text
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Reg"}
            fontSize={"1.2rem"}
          >
            Infinity Pool
          </Text>
          <Text
            width={"80%"}
            m={"0 auto"}
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Thin Italic"}
          >
            Take a dip in our pool that visually extends into the depths of the
            lake
          </Text>
        </Box>
      </Flex>
      <Flex
        align={"center"}
        justify={"space-between"}
        w={"53%"}
        m={"0 auto"}
        marginTop={"1rem"}
      >
        <Box w={"33%"}>
          <Image src={Wifi} alt="dining" w={"50px"} h={"50px"} m={"0 auto"} />
          <Text
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Reg"}
            fontSize={"1.2rem"}
          >
            Free Wifi
          </Text>
          <Text
            width={"80%"}
            m={"0 auto"}
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Thin Italic"}
          >
            Enjoy complimentary fiber internet access in all guest rooms and
            public spaces.
          </Text>
        </Box>

        <Box w={"33%"}>
          <Text
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Reg"}
            fontSize={"1.2rem"}
          >
            Exclusive Hotel Hire
          </Text>
          <Text
            width={"80%"}
            m={"0 auto"}
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Thin Italic"}
          >
            Open for exclusive hire as a luxury villa retreat, guests can enjoy
            over 1,500 sqm of living space, along with an exclusive dining
            experience at Ilulli Restaurant, and full private use of the hotel's
            facilities. You will have your own house staff to cater to your
            needs and meals prepared especially for your group.
          </Text>
        </Box>
        <Box w={"33%"}>
          <Image
            src={Housekeeping}
            alt="dining"
            w={"50px"}
            h={"50px"}
            m={"0 auto"}
          />
          <Text
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Reg"}
            fontSize={"1.2rem"}
          >
            Daily Housekeeping
          </Text>
          <Text
            width={"80%"}
            m={"0 auto"}
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Thin Italic"}
          >
            Have a comfortable stay in a crisp and clean environment
          </Text>
        </Box>
      </Flex>

      <Flex
        justify={"center"}
        align={"center"}
        w={"53%"}
        my={"2rem"}
        mx={"auto"}
        direction={"column"}
      >
        <Box w={"50%"} m={"0 auto"}>
          <Text
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Reg"}
            fontSize={"1.2rem"}
          >
            Events
          </Text>
          <Text
            width={"80%"}
            m={"0 auto"}
            textAlign={"center"}
            fontFamily={"HvDTrial Brandon Grotesque Thin Italic"}
          >
            We can hold private celebrations, such as weddings, birthdays, and
            anniversaries. We also accept private group dining and corporate
            bookings for executive retreats, team building, staff parties,
            product launches, and conferences/seminars. Get in touch for more
            details.
          </Text>
        </Box>
        <Button
          bg="#A1A09E"
          color={"white"}
          padding={"1rem"}
          fontFamily={"HvDTrial Brandon Grotesque Thin"}
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
          Explore our Events Packages
        </Button>
      </Flex>
    </Box>
  );
}
