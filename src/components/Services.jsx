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
    <Box w="100%" marginTop={"4rem"} mx={"auto"}>
      <Text
        textAlign={"center"}
        fontFamily={"Montserrat Variable"}
        fontSize={"2rem"}
        id="services"
      >
        OUR SERVICES
      </Text>
      <Flex
        align={"center"}
        justify={{
          base: "center",
          md: "space-between",
          lg: "space-between"
        }}
        w={{
          base: "100%",
          md: "80%",
          lg: "53%"
        }}
        m={"0 auto"}
        marginTop={"1rem"}
        direction={{
          base: "column",
          md: "row",
          lg: "row"
        }}
      >
        <Box
          w={{
            base: "100%",
            md: "90%",
            lg: "33%"
          }}
        >
          <Image src={Dining} alt="dining" w={"50px"} h={"50px"} m={"0 auto"} />
          <Text
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontSize={"1.2rem"}
          >
            Dining
          </Text>
          <Text
            width={"80%"}
            m={"0 auto"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontWeight={"light"}
          >
            We offer complimentary breakfast. We are also open for lunch,
            merienda and dinner, exculsively for our checked-in guests, at
            Ilulli Restaurant
          </Text>
        </Box>

        <Box
          w={{
            base: "100%",
            md: "90%",
            lg: "33%"
          }}
        >
          <Image src={Garden} alt="dining" w={"50px"} h={"50px"} m={"0 auto"} />
          <Text
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontSize={"1.2rem"}
          >
            Gardens & Nooks
          </Text>
          <Text
            width={"80%"}
            m={"0 auto"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontWeight={"light"}
          >
            Our guests have access to our lakeview gardens, private beachfront
            and privacy nooks dotted around the grounds
          </Text>
        </Box>
        <Box
          w={{
            base: "100%",
            md: "90%",
            lg: "33%"
          }}
        >
          <Image
            src={Pool}
            alt="dining"
            w={"50px"}
            h={"50px"}
            m={"1rem auto"}
          />
          <Text
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontSize={"1.2rem"}
          >
            Infinity Pool
          </Text>
          <Text
            width={"80%"}
            m={"0 auto"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontWeight={"light"}
          >
            Take a dip in our pool that visually extends into the depths of the
            lake
          </Text>
        </Box>
      </Flex>
      <Flex
        align={"center"}
        justify={{
          base: "center",
          md: "space-between",
          lg: "space-between"
        }}
        w={{
          base: "100%",
          md: "80%",
          lg: "53%"
        }}
        m={"0 auto"}
        marginTop={"1rem"}
        direction={{
          base: "column",
          md: "row",
          lg: "row"
        }}
      >
        <Box
          w={{
            base: "100%",
            md: "90%",
            lg: "33%"
          }}
        >
          <Image
            src={Wifi}
            alt="dining"
            w={"50px"}
            h={"50px"}
            m={"1rem auto"}
          />
          <Text
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontSize={"1.2rem"}
          >
            Free Wifi
          </Text>
          <Text
            width={"80%"}
            m={"0 auto"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontWeight={"light"}
          >
            Enjoy complimentary fiber internet access in all guest rooms and
            public spaces.
          </Text>
        </Box>

        <Box
          w={{
            base: "100%",
            md: "90%",
            lg: "33%"
          }}
        >
          <Text
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontSize={"1.2rem"}
            marginTop={{
              base: "1rem",
              md: "0",
              lg: "0"
            }}
          >
            Exclusive Hotel Hire
          </Text>
          <Text
            width={"80%"}
            m={"0 auto"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontWeight={"light"}
          >
            Open for exclusive hire as a luxury villa retreat, guests can enjoy
            over 1,500 sqm of living space, along with an exclusive dining
            experience at Ilulli Restaurant, and full private use of the hotel's
            facilities. You will have your own house staff to cater to your
            needs and meals prepared especially for your group.
          </Text>
        </Box>
        <Box
          w={{
            base: "100%",
            md: "90%",
            lg: "33%"
          }}
        >
          <Image
            src={Housekeeping}
            alt="dining"
            w={"50px"}
            h={"50px"}
            m={"1rem auto"}
          />
          <Text
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontSize={"1.2rem"}
            marginTop={{
              base: "1rem",
              md: "0",
              lg: "0"
            }}
          >
            Daily Housekeeping
          </Text>
          <Text
            width={"80%"}
            m={"0 auto"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontWeight={"light"}
          >
            Have a comfortable stay in a crisp and clean environment
          </Text>
        </Box>
      </Flex>

      <Flex
        justify={"center"}
        align={"center"}
        w={{
          base: "100%",
          md: "80%",
          lg: "53%"
        }}
        my={"2rem"}
        mx={"auto"}
        direction={"column"}
      >
        <Box
          w={{
            base: "90%",
            md: "70%",
            lg: "50%"
          }}
          m={"1rem auto"}
        >
          <Text
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontSize={"1.2rem"}
            marginTop={{
              base: "1rem",
              md: "0",
              lg: "0"
            }}
          >
            Events
          </Text>
          <Text
            width={{
              base: "100%",
              md: "80%",
              lg: "80%"
            }}
            m={"1rem auto"}
            textAlign={"center"}
            fontFamily={"Montserrat Variable"}
            fontWeight={"light"}
          >
            We can hold private celebrations, such as weddings, birthdays, and
            anniversaries. We also accept private group dining and corporate
            bookings for executive retreats, team building, staff parties,
            product launches, and conferences/seminars. Get in touch for more
            details.
          </Text>
        </Box>
        <Button
          bg="#e37f06"
          color={"white"}
          padding={"1rem"}
          fontFamily={"Montserrat Variable"}
          borderRadius={"0px"}
          fontSize={"16px"}
          _hover={{
            background: "white",
            color: "black",
            textDecoration: "none",
            boxShadow: "inset 0 0 0 1px #e37f06" // Set the boxShadow property for the border
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
