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
                    Public API 100% functional. Made with React, React Intl,
                    styled components, Auth0, mdx for code... This is my best
                    project!
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
                    Close
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
                <ModalHeader color={"#318324"}>This is the Jungle!</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text lineHeight={1.75} mb={"20px"} fontSize="xl">
                    Proyecto completo, tanto parte Backend como Frontend. Basado
                    en temática animal, incluyendo colecciones de hábitats,
                    animales y familias de animales. El back está hecho con
                    Nodejs y Mongo, y para la parte front usé React. Incluye
                    varias librerías para trabajar con mapas, autenticación,
                    envío de emails...
                  </Text>
                  <Icon alignSelf={"center"} as={DiReact} p="4" w="24" h="24" />
                  <Link
                    color={"#318324"}
                    fontSize={"2rem"}
                    href="https://github.com/vtrev05/Jungle-Frontend"
                    isExternal
                  >
                    Jungle Project
                  </Link>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onDeleteClose}>
                    Close
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
            maxHeight={"322px"}
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
                    Aplicación sobre la API de Rick & Morty. Está desarrollada
                    con Angular y los datos cogidos enteramente de la API.
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
                    Close
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
            maxHeight={"322px"}
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
                  Christmas Letter
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text lineHeight={1.75} mb={"20px"} fontSize="xl">
                    Aplicación desarrollada con Angular. Carta a los Reyes Magos
                    pensada para trabajar con el intercambio de información en
                    Angular entre padres e hijos. Varios modelos de carta
                    intercambiable con botones. Perfecto para épocas navideñas!
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
                    Christmas Letter
                  </Link>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onEditClose2}>
                    Close
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
                <ModalHeader color={"skyblue"}>NBA App</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text lineHeight={1.75} mb={"20px"} fontSize="xl">
                    Aplicación hecha con Angular en su parte front, y cogidos
                    los datos de dos APIS distintas, una que contenía datos
                    sobre equipos y otra propia, hecha con Nodejs y Mongo, que
                    recogía información sobre los jugadores de las finales de
                    2008 de la NBA disputadas entre los Boston Celtics y Los
                    Ángeles Lakers.
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
                    NBA App
                  </Link>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onEditClose3}>
                    Close
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
                  Front-end Mentor Challenges
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text lineHeight={1.75} mb={"20px"} fontSize="xl">
                    Front-end Mentor es una web que contiene diferentes retos
                    nivelados disponibles para cualquiera que quiera enfrentarse
                    a ellos. Tienen una gran comunidad que apoya y da útiles
                    consejos al resto de usuarios. En mi cuenta de github están
                    disponibles los 7 retos que he completado hasta la fecha!
                  </Text>
                  <Icon alignSelf={"center"} as={DiCss3} p="4" w="24" h="24" />
                  <Link
                    color={"cyan"}
                    fontSize={"2rem"}
                    href="https://github.com/vtrev05?tab=repositories"
                    isExternal
                  >
                    Front Mentor
                  </Link>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onEditClose4}>
                    Close
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
