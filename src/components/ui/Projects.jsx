import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { DiReact, DiAngularSimple, DiCss3 } from "react-icons/di";
import { Image, Link } from "@chakra-ui/react";

const Projects = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:1000px)");

  return (
    <>
      <Box alignSelf="center" px="32" py="16">
        <Flex wrap={"wrap"} direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.400"
            w="50vh"
            justify="flex-end"
            _hover={{ bg: "#e10600" }}
          >
            <Image
           opacity={"80%"}
           mb={isNotSmallerScreen ? "5" : "12"}
           boxSize='100%'
           borderRadius="5px"
           src="https://i.imgur.com/aQLCaRG.png" alt="F1 project" />
            <Text mb={"20px"} fontSize="xl">
            Public API 100% functional. My best project.
          </Text>
            <Icon alignSelf={"center"} as={DiReact} p="4" w="24" h="24" color="black" />
            <Link href="https://formula1s.netlify.app/" isExternal>
              F1's API
            </Link>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.400"
            h="35vh"
            w="50vh"
            justify="flex-end"
            _hover={{ bg: "#318324" }}
          >
              <Text mb={"20px"} fontSize="xl">
            React project with front and back-end.
          </Text>
            <Icon alignSelf={"center"} as={DiReact} p="4" w="24" h="24" color="black" />
            <Link href="https://github.com/vtrev05/Jungle-Frontend" isExternal>
              Jungle Project
            </Link>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.400"
            h="35vh"
            w="50vh"
            justify="flex-end"
            _hover={{ bg: "#2b7489" }}
          >
            <Text mb={"20px"} fontSize="xl">
            Complete app based in Rick & Morty.
          </Text>
            <Icon alignSelf={"center"} as={DiAngularSimple} p="4" w="24" h="24" color="black" />
            <Link href="https://github.com/vtrev05/RickAndMortyApp" isExternal>
              Rick & Morty
            </Link>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.400"
            h="35vh"
            w="50vh"
            justify="flex-end"
            _hover={{ bg: "rgb(225 31 31)" }}
          >
            <Text mb={"20px"} fontSize="xl">
            Here you can send your Christmas Letter
          </Text>
            <Icon alignSelf={"center"} as={DiAngularSimple} p="4" w="24" h="24" color="black" />
            <Link href="https://christmas-letter-angular-oyr93frof-vtrev05.vercel.app/" isExternal>
              Christmas Letter
            </Link>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.400"
            h="35vh"
            w="50vh"
            justify="flex-end"
            _hover={{ bg: "skyblue" }}
          >
            <Text mb={"20px"} fontSize="xl">
            App about NBA
          </Text>
            <Icon alignSelf={"center"} as={DiAngularSimple} p="4" w="24" h="24" color="black" />
            <Link href="https://github.com/vtrev05/NBA-App" isExternal>
              NBA App
            </Link>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.400"
            h="35vh"
            w="50vh"
            justify="flex-end"
            _hover={{ bg: "blue" }}
          >
            <Text mb={"20px"} fontSize="xl">
            HTML, CSS and Javascript challenges
          </Text>
            <Icon alignSelf={"center"} as={DiCss3} p="4" w="24" h="24" color="black" />
            <Link href="https://github.com/vtrev05?tab=repositories" isExternal>
              Front Mentor
            </Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Projects;
