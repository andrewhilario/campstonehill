import React from "react";
import Navbar from "../components/Navbar";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Camper from "../components/room-components/Camper";
import Footer from "../components/Footer";
import TreeHouses from "../components/room-components/Treehouses";
import Cabins from "../components/room-components/Cabins";

export default function Rooms() {
  const [camper, setCamper] = React.useState(false);
  const [treeHouse, setTreeHouse] = React.useState(false);
  const [cabin, setCabin] = React.useState(false);
  const [allRooms, setAllRooms] = React.useState(true);

  const showAllRooms = () => {
    setCamper(false);
    setTreeHouse(false);
    setCabin(false);
    setAllRooms(true);
  };

  const showCamper = () => {
    setCamper(true);
    setTreeHouse(false);
    setCabin(false);
    setAllRooms(false);
  };

  const showTreeHouse = () => {
    setCamper(false);
    setTreeHouse(true);
    setCabin(false);
    setAllRooms(false);
  };

  const showCabin = () => {
    setCamper(false);
    setTreeHouse(false);
    setCabin(true);
    setAllRooms(false);
  };

  return (
    <>
      <Navbar />
      <Text
        fontSize={{
          base: "1.5rem",
          md: "2.5rem",
          lg: "6xl"
        }}
        fontWeight="semibold"
        textAlign="center"
        mt="7rem"
        color="#ca7106"
        fontFamily={"'Montserrat Variable', sans-serif"}
      >
        Rooms
      </Text>
      {/* create a basic description for this page */}
      <Text
        fontSize={{
          base: "12px",
          md: "1.5rem",
          lg: "18px"
        }}
        fontWeight="normal"
        textAlign="center"
        mt=".5rem"
        color="#fc8d07"
        fontFamily={"'Montserrat Variable', sans-serif"}
      >
        This is where you can see all the rooms that are available for
        accomodation.
      </Text>
      <Box w={"100%"}>
        <Flex
          direction="row"
          justify="space-between"
          align="center"
          w={{
            base: "95%",
            md: "80%",
            lg: "30%"
          }}
          m={"2rem auto"}
        >
          <Link
            fontSize={{
              base: "11px",
              md: "1.5rem",
              lg: "18px"
            }}
            py={".5rem"}
            px={"1.5rem"}
            border={"1px solid #fc8d07"}
            color={"#fc8d07"}
            _hover={{ bg: "#fc8d07", color: "white" }}
            onClick={showAllRooms}
          >
            All Rooms
          </Link>
          <Link
            fontSize={{
              base: "11px",
              md: "1.5rem",
              lg: "18px"
            }}
            py={".5rem"}
            px={"1.5rem"}
            border={"1px solid #fc8d07"}
            color={"#fc8d07"}
            _hover={{ bg: "#fc8d07", color: "white" }}
            onClick={showCamper}
          >
            Camper
          </Link>
          <Link
            fontSize={{
              base: "11px",
              md: "1.5rem",
              lg: "18px"
            }}
            py={".5rem"}
            px={"1.5rem"}
            border={"1px solid #fc8d07"}
            color={"#fc8d07"}
            _hover={{ bg: "#fc8d07", color: "white" }}
            onClick={showTreeHouse}
          >
            Treehouses
          </Link>
          <Link
            fontSize={{
              base: "11px",
              md: "1.5rem",
              lg: "18px"
            }}
            py={".5rem"}
            px={"1.5rem"}
            border={"1px solid #fc8d07"}
            color={"#fc8d07"}
            _hover={{ bg: "#fc8d07", color: "white" }}
            onClick={showCabin}
          >
            Cabins
          </Link>
        </Flex>
      </Box>

      {allRooms && (
        <>
          <Camper
            image={
              "https://a0.muscache.com/im/pictures/miso/Hosting-744620677194371718/original/5e319734-64ff-478a-af9d-f86068967a7c.jpeg?im_w=1200"
            }
            camperTitle={"T-Camper Yellow with tub and roof deck"}
            numberOfGuest={2}
            numberOfBeds={1}
          />
          <Camper
            image={
              "https://a0.muscache.com/im/pictures/miso/Hosting-744620677194371718/original/34e63d58-184f-4dd5-a1e9-9331336c3405.jpeg?im_w=1200"
            }
            camperTitle={"T-Camper Red with tub & roof deck"}
            numberOfGuest={2}
            numberOfBeds={1}
            rowReverse={true}
          />
          <Camper
            image={
              "https://a0.muscache.com/im/pictures/miso/Hosting-744620677194371718/original/b645b586-52af-4f33-b657-4e814150e25c.jpeg?im_w=1200"
            }
            camperTitle={"Trailer-Camper Green w/ oversized tub & roof deck"}
            numberOfGuest={2}
            numberOfBeds={1}
          />
          <TreeHouses
            image={
              "https://a0.muscache.com/im/pictures/5db4b83c-4fb3-4761-ae04-ed53d36168c8.jpg?im_w=1440"
            }
            treeHouseTitle={"Romantic Treehouse (1) by a lush natural forest"}
            numberOfGuest={2}
            numberOfBeds={1}
            rowReverse={true}
          />
          <TreeHouses
            image={
              "https://a0.muscache.com/im/pictures/d45bc4ff-cd5e-44b0-96d6-f87ace743f8c.jpg?im_w=1200"
            }
            treeHouseTitle={"Cozy Treehouse (2) by a prestine natural forest"}
            numberOfGuest={2}
            numberOfBeds={1}
          />
          <TreeHouses
            image={
              "https://a0.muscache.com/im/pictures/miso/Hosting-744658257798216531/original/cb92b7e2-1d2a-43d8-948c-2d20fe5bce31.jpeg?im_w=1200"
            }
            treeHouseTitle={"Cozy Treehouse (3) by a lush natural forest"}
            numberOfGuest={2}
            numberOfBeds={1}
            rowReverse={true}
          />
          <Cabins
            image={
              "https://a0.muscache.com/im/pictures/56142b23-d0e8-4ab1-bd51-ce633ef15cc4.jpg?im_w=1200"
            }
            cabinTitle={"Casitas 1"}
            numberOfGuest={2}
            numberOfBeds={1}
          />
        </>
      )}

      {camper && (
        <>
          <Camper
            image={
              "https://a0.muscache.com/im/pictures/miso/Hosting-744620677194371718/original/5e319734-64ff-478a-af9d-f86068967a7c.jpeg?im_w=1200"
            }
            camperTitle={"T-Camper Yellow with tub and roof deck"}
            numberOfGuest={2}
            numberOfBeds={1}
          />
          <Camper
            image={
              "https://a0.muscache.com/im/pictures/miso/Hosting-744620677194371718/original/34e63d58-184f-4dd5-a1e9-9331336c3405.jpeg?im_w=1200"
            }
            camperTitle={"T-Camper Red with tub & roof deck"}
            numberOfGuest={2}
            numberOfBeds={1}
            rowReverse={true}
          />
          <Camper
            image={
              "https://a0.muscache.com/im/pictures/miso/Hosting-744620677194371718/original/b645b586-52af-4f33-b657-4e814150e25c.jpeg?im_w=1200"
            }
            camperTitle={"Trailer-Camper Green w/ oversized tub & roof deck"}
            numberOfGuest={2}
            numberOfBeds={1}
          />
        </>
      )}

      {treeHouse && (
        <>
          <TreeHouses
            image={
              "https://a0.muscache.com/im/pictures/5db4b83c-4fb3-4761-ae04-ed53d36168c8.jpg?im_w=1440"
            }
            treeHouseTitle={"Romantic Treehouse (1) by a lush natural forest"}
            numberOfGuest={2}
            numberOfBeds={1}
            rowReverse={true}
          />
          <TreeHouses
            image={
              "https://a0.muscache.com/im/pictures/d45bc4ff-cd5e-44b0-96d6-f87ace743f8c.jpg?im_w=1200"
            }
            treeHouseTitle={"Cozy Treehouse (2) by a prestine natural forest"}
            numberOfGuest={2}
            numberOfBeds={1}
          />
          <TreeHouses
            image={
              "https://a0.muscache.com/im/pictures/miso/Hosting-744658257798216531/original/cb92b7e2-1d2a-43d8-948c-2d20fe5bce31.jpeg?im_w=1200"
            }
            treeHouseTitle={"Cozy Treehouse (3) by a lush natural forest"}
            numberOfGuest={2}
            numberOfBeds={1}
            rowReverse={true}
          />
        </>
      )}

      {cabin && (
        <Cabins
          image={
            "https://a0.muscache.com/im/pictures/56142b23-d0e8-4ab1-bd51-ce633ef15cc4.jpg?im_w=1200"
          }
          cabinTitle={"Casitas 1"}
          numberOfGuest={2}
          numberOfBeds={1}
        />
      )}
      <Footer />
    </>
  );
}
