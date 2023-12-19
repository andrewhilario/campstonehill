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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            expedita enim, veniam molestias quas itaque inventore consectetur
            nesciunt accusantium iste quos non odit? Reiciendis, nam.
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus voluptate vero sed nulla inventore saepe.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            eos.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            doloribus placeat, fuga perferendis molestiae nam.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            incidunt ipsa, itaque cupiditate ducimus provident labore, quibusdam
            aperiam expedita natus pariatur commodi nisi quaerat, nulla illum!
            Illum odio aspernatur deserunt.
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
            amet?
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus illo animi cupiditate, adipisci eaque ex ad distinctio
            qui culpa et doloremque consequatur non corrupti ratione saepe
            mollitia vero, placeat nam. details.
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
