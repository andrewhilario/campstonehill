/* eslint-disable react/prop-types */
import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FiUser } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";

const Cabins = ({
  image,
  cabinTitle,
  numberOfGuest,
  numberOfBeds,
  rowReverse
}) => {
  return (
    <>
      <Flex
        w="100%"
        gap={"2rem"}
        align={"center"}
        fontFamily={"'Montserrat Variable', sans-serif"}
        direction={{
          base: "column",
          md: rowReverse ? "row-reverse" : "row"
        }}
        my={"6rem"}
      >
        <Box
          height={"550px"}
          w={{
            base: "100%",
            lg: "50%"
          }}
          overflow={"hidden"}
        >
          <Image
            objectFit={"cover"}
            height={"100%"}
            w={"100%"}
            src={image}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.2)";
              e.target.style.transition = "all .3s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.transition = "all .3s ease-in-out";
            }}
          />
        </Box>
        <Box
          w={{
            base: "100%",
            lg: "50%"
          }}
          paddingLeft={{
            base: "0",
            lg: rowReverse ? "20rem" : "0"
          }}
        >
          <Text
            fontSize={{
              base: "md",
              md: "xl",
              lg: "2xl"
            }}
            fontWeight="semibold"
            color="#391b13"
            fontFamily={"'Montserrat Variable', sans-serif"}
            marginBottom={"1rem"}
            textAlign={{
              base: "center",
              md: "left",
              lg: "left"
            }}
          >
            {cabinTitle}
          </Text>
          <Text
            fontSize={{
              base: "sm",
              md: "md",
              lg: "md"
            }}
            textAlign={{
              base: "center",
              md: "left",
              lg: "left"
            }}
            fontWeight="normal"
            color="#391b13"
            w={"60%"}
            m={{
              base: "0 auto",
              md: "0",
              lg: "0"
            }}
          >
            Discover comfort and luxury in our air-conditioned rooms with
            beddings, pillows, and towels. Enjoy the veranda/roof deck, dipping
            tubs, and a fully-equipped kitchenette (not available in casitas).
            Barbecue with the barrel-griller, park in our private car park, and
            use our check-in/check-out shuttle.
          </Text>
          <Flex
            w={"100%"}
            gap={"2rem"}
            my={"2rem"}
            align={{
              base: "center"
            }}
            justify={{
              base: "center"
            }}
          >
            <Box>
              <FiUser
                style={{
                  color: "#391b13",
                  fontSize: "2rem",
                  margin: "0 auto"
                }}
              />
              <Text
                textAlign={"center"}
                mt={"1rem"}
                fontWeight={"semibold"}
                color={"#391b13"}
              >
                Guest
              </Text>
              <Text
                textAlign={"center"}
                fontWeight={"semibold"}
                color={"#391b13"}
              >
                {numberOfGuest}
              </Text>
            </Box>
            <Box>
              <IoBedOutline
                style={{
                  color: "#391b13",
                  fontSize: "2rem",
                  margin: "0 auto"
                }}
              />
              <Text
                textAlign={"center"}
                mt={"1rem"}
                fontWeight={"semibold"}
                color={"#391b13"}
              >
                Bedroom
              </Text>
              <Text
                textAlign={"center"}
                fontWeight={"semibold"}
                color={"#391b13"}
              >
                {numberOfBeds}
              </Text>
            </Box>
          </Flex>
          <Flex
            w={"100%"}
            gap={"2rem"}
            my={"2rem"}
            align={{
              base: "center"
            }}
            justify={{
              base: "center"
            }}
          >
            <Link
              py={".5rem"}
              borderBottom={"2px solid #fc8d07"}
              color={"#fc8d07"}
              fontWeight={"semibold"}
              _hover={{
                textDecoration: "none"
              }}
            >
              Discover
            </Link>
            <Button
              py={".5rem"}
              px={"1.5rem"}
              bg={"#fc8d07"}
              color={"white"}
              fontWeight={"semibold"}
              borderRadius={"0"}
              disabled={true}
              _hover={{ bg: "#e37f06", color: "white" }}
            >
              Book Now
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Cabins;
