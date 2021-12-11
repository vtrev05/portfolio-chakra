import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { DiReact, DiAngularSimple, DiCss3 } from "react-icons/di";
import "./Project.css";
import { FormattedMessage } from "react-intl";
import {
  Image,
  Button,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Projects = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:700px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const {
    isOpen: isEditOpen2,
    onOpen: onEditOpen2,
    onClose: onEditClose2,
  } = useDisclosure();
  const {
    isOpen: isEditOpen3,
    onOpen: onEditOpen3,
    onClose: onEditClose3,
  } = useDisclosure();
  const {
    isOpen: isEditOpen4,
    onOpen: onEditOpen4,
    onClose: onEditClose4,
  } = useDisclosure();

  return (
    <>
      <Box alignSelf="center" py="16">
        <Text
          w="100%"
          m="40px 0 20px"
          fontSize={isNotSmallerScreen ? "4xl" : "2xl"}
        >
          <FormattedMessage
            id="projects.title"
            defaultMessage="
            These are some of my best projects:"
          />
        </Text>
        <Flex
          w="100%"
          margin={"0 auto"}
          wrap={"wrap"}
          direction={isNotSmallerScreen ? "row" : "column"}
          mt={8}
        >
          <Flex
            rounded="xl"
            margin={"14px auto"}
            bg="gray.400"
            w={isNotSmallerScreen ? "45vw" : "90vw"}
            _hover={{ bg: "#e10600" }}
          >
            <Image
              onClick={onOpen}
              cursor={"pointer"}
              boxSize="100%"
              borderRadius="5px"
              src="https://i.imgur.com/aQLCaRG.png"
              alt="F1 project"
              _hover={{ opacity: "70%" }}
            />
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader color={"#e10600"}>F1's API</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text mb={"20px"} fontSize="xl">
                    <FormattedMessage
                      id="projects.f1.body"
                      defaultMessage="
                      Public API 100% functional. Made with React, React Intl,
                      styled components, Auth0, mdx for code... This is my best
                      project!"
                    />
                  </Text>
                  <Icon alignSelf={"center"} as={DiReact} p="4" w="24" h="24" />
                  <Link
                    color={"#e10600"}
                    fontSize={"2rem"}
                    href="https://formula1s.netlify.app/"
                    isExternal
                  >
                    F1's API
                  </Link>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    <FormattedMessage
                      id="projects.close"
                      defaultMessage=" Close"
                    />
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>

          <Flex
            rounded="xl"
            margin={"14px auto"}
            bg="gray.400"
            w={isNotSmallerScreen ? "45vw" : "90vw"}
            _hover={{ bg: "#318324" }}
          >
            <Image
              onClick={onDeleteOpen}
              cursor={"pointer"}
              boxSize="100%"
              borderRadius="5px"
              src="https://i.imgur.com/22ifoeb.png"
              alt="F1 project"
              _hover={{ opacity: "70%" }}
            />
            <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader color={"#318324"}>
                  <FormattedMessage
                    id="projects.jungle.title"
                    defaultMessage="This is the Jungle!"
                  />
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text lineHeight={1.75} mb={"20px"} fontSize="xl">
                    <FormattedMessage
                      id="projects.jungle.body"
                      defaultMessage="Complete project, including Backend and Frontend. Based on animal themes, this project includes collections of habitats, animals and animal families. The back is made with Nodejs and Mongo, and for the front part I used React. It includes several libraries to work with maps, authentication, sending emails..."
                    />
                  </Text>
                  <Icon alignSelf={"center"} as={DiReact} p="4" w="24" h="24" />
                  <Link
                    color={"#318324"}
                    fontSize={"2rem"}
                    href="https://github.com/vtrev05/Jungle-Frontend"
                    isExternal
                  >
                    <FormattedMessage
                      id="projects.jungle.subtitle"
                      defaultMessage="Jungle Project"
                    />
                  </Link>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onDeleteClose}>
                    <FormattedMessage
                      id="projects.close"
                      defaultMessage=" Close"
                    />
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>

          <Flex
            rounded="xl"
            margin={"14px auto"}
            bg="gray.400"
            w={isNotSmallerScreen ? "45vw" : "90vw"}
            maxHeight={"380px"}
            _hover={{ bg: "#2b7489" }}
          >
            <Image
              onClick={onEditOpen}
              cursor={"pointer"}
              boxSize="100%"
              borderRadius="5px"
              src="https://i.imgur.com/FHzOVSm.png"
              alt="F1 project"
              _hover={{ opacity: "70%" }}
            />
            <Modal isOpen={isEditOpen} onClose={onEditClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader color={"#2b7489"}>Rick & Morty</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text lineHeight={1.75} mb={"20px"} fontSize="xl">
                    <FormattedMessage
                      id="projects.rick.body"
                      defaultMessage="Rick & Morty API application. It is developed with Angular and the data taken entirely from the API."
                    />
                  </Text>
                  <Icon
                    alignSelf={"center"}
                    as={DiAngularSimple}
                    p="4"
                    w="24"
                    h="24"
                  />
                  <Link
                    color={"#2b7489"}
                    fontSize={"2rem"}
                    href="https://github.com/vtrev05/RickAndMortyApp"
                    isExternal
                  >
                    Rick & Morty
                  </Link>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onEditClose}>
                    <FormattedMessage
                      id="projects.close"
                      defaultMessage="Close"
                    />
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>

          <Flex
            rounded="xl"
            margin={"14px auto"}
            bg="gray.400"
            w={isNotSmallerScreen ? "45vw" : "90vw"}
            maxHeight={"380px"}
            _hover={{ bg: "rgb(225 31 31)" }}
          >
            <Image
              onClick={onEditOpen2}
              cursor={"pointer"}
              boxSize="100%"
              borderRadius="5px"
              src="https://i.imgur.com/Il24mVx.png"
              alt="F1 project"
              _hover={{ opacity: "70%" }}
            />
            <Modal isOpen={isEditOpen2} onClose={onEditClose2}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader color={"rgb(225 31 31)"}>
                  <FormattedMessage
                    id="projects.christmas.title"
                    defaultMessage="Christmas Letter"
                  />
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text lineHeight={1.75} mb={"20px"} fontSize="xl">
                    <FormattedMessage
                      id="projects.christmas.body"
                      defaultMessage="Application developed with Angular. Letter to the Three Wise Men designed to work with the exchange of information in Angular between parents and children. Several models of interchangeable letter with buttons. Perfect for Christmas times!
                      "
                    />
                  </Text>
                  <Icon
                    alignSelf={"center"}
                    as={DiAngularSimple}
                    p="4"
                    w="24"
                    h="24"
                  />
                  <Link
                    color={"rgb(225 31 31)"}
                    fontSize={"2rem"}
                    href="https://christmas-letter-angular-oyr93frof-vtrev05.vercel.app/"
                    isExternal
                  >
                    <FormattedMessage
                      id="projects.christmas.title"
                      defaultMessage="Christmas Letter"
                    />
                  </Link>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onEditClose2}>
                    <FormattedMessage
                      id="projects.close"
                      defaultMessage="Close"
                    />
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>

          <Flex
            rounded="xl"
            margin={"14px auto"}
            bg="gray.400"
            w={isNotSmallerScreen ? "45vw" : "90vw"}
            _hover={{ bg: "skyblue" }}
          >
            <Image
              onClick={onEditOpen3}
              cursor={"pointer"}
              boxSize="100%"
              borderRadius="5px"
              src="https://i.imgur.com/k6P6PVs.png"
              alt="F1 project"
              _hover={{ opacity: "70%" }}
            />
            <Modal isOpen={isEditOpen3} onClose={onEditClose3}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader color={"skyblue"}>
                  <FormattedMessage
                    id="projects.nba.title"
                    defaultMessage="NBA App"
                  />
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text lineHeight={1.75} mb={"20px"} fontSize="xl">
                    <FormattedMessage
                      id="projects.nba.body"
                      defaultMessage="Application made with Angular in its front part, and the data from two different APISs were taken, one that contained data on teams and another of its own, made with Nodejs and Mongo, which collected information on the players of the 2008 NBA finals played between the Boston Celtics and the Los Angeles Lakers."
                    />
                  </Text>
                  <Icon
                    alignSelf={"center"}
                    as={DiAngularSimple}
                    p="4"
                    w="24"
                    h="24"
                  />
                  <Link
                    color={"skyblue"}
                    fontSize={"2rem"}
                    href="https://github.com/vtrev05/NBA-App"
                    isExternal
                  >
                    <FormattedMessage
                      id="projects.nba.title"
                      defaultMessage="NBA App"
                    />
                  </Link>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onEditClose3}>
                    <FormattedMessage
                      id="projects.close"
                      defaultMessage="Close"
                    />
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>

          <Flex
            rounded="xl"
            margin={"14px auto"}
            bg="gray.400"
            w={isNotSmallerScreen ? "45vw" : "90vw"}
            _hover={{ bg: "blue" }}
          >
            <Image
              onClick={onEditOpen4}
              cursor={"pointer"}
              boxSize="100%"
              borderRadius="5px"
              src="https://i.imgur.com/ejvWmdn.png"
              alt="F1 project"
              _hover={{ opacity: "70%" }}
            />
            <Modal isOpen={isEditOpen4} onClose={onEditClose4}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader color={"cyan"}>
                  <FormattedMessage
                    id="projects.frontend.title"
                    defaultMessage="Front-end Mentor"
                  />
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text lineHeight={1.75} mb={"20px"} fontSize="xl">
                    <FormattedMessage
                      id="projects.frontend.body"
                      defaultMessage="Front-end Mentor is a website that contains different leveled challenges available for anyone who wants to face them. They have a large community that supports and gives useful advice to other users. The 7 challenges that I have completed to date are available on my github account !"
                    />
                  </Text>
                  <Icon alignSelf={"center"} as={DiCss3} p="4" w="24" h="24" />
                  <Link
                    color={"cyan"}
                    fontSize={"2rem"}
                    href="https://github.com/vtrev05?tab=repositories"
                    isExternal
                  >
                    <FormattedMessage
                      id="projects.frontend.title"
                      defaultMessage="Front-end Mentor"
                    />
                  </Link>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onEditClose4}>
                    <FormattedMessage
                      id="projects.close"
                      defaultMessage="
                      Close"
                    />
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Projects;
