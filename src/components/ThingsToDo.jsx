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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            consequuntur dicta, at quas laudantium iusto dolorum placeat
            corporis earum commodi laboriosam debitis repellat aut! Ipsa cumque
            voluptatum ex sed id.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            ratione, doloribus molestias excepturi sapiente sit ut ad alias
            laborum voluptates reprehenderit dolorum. Provident totam illum quos
            quidem eligendi illo omnis!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            eveniet ex consequatur dolorum architecto magnam aspernatur ad
            officiis fuga reiciendis at neque in earum tempora beatae ratione,
            quaerat dignissimos sunt praesentium rem eius, consequuntur vero.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto natus
            incidunt voluptates labore doloremque soluta, voluptas eius impedit
            molestiae numquam, accusamus itaque accusantium adipisci fugiat,
            consequuntur laudantium tempore perspiciatis reprehenderit.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            tempora officiis animi deserunt illum molestiae nam sunt est
            corrupti doloremque.
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            impedit similique voluptatum eos beatae eveniet odio at sequi rem
            inventore, repellat odit dolorem hic adipisci ratione animi
            incidunt, ducimus minus facere quo iste id provident?
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
