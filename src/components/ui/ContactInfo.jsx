import React from "react";
import Icon from "@chakra-ui/icon";
import { useMediaQuery } from "@chakra-ui/media-query";
import { FaGithub, FaLinkedin, FaEnvelopeOpen, FaPhone } from "react-icons/fa";
import {
  Flex,
  Text,
  Button,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const ContactInfo = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:1000px)");

  return (
    <>
      <Box mt={"200px"} alignSelf="center" px="32" py="16">
      <Text mb={"20px"} fontSize="4xl">Puedes contactar conmigo a través de las siguientes vías:</Text>
        <Flex
          justifyContent={"center"}
          wrap={"wrap"}
          direction={isNotSmallerScreen ? "row" : "column"}
          mt={8}
        >
          <Flex>
            <Button
              mt={8}
              ml={8}
              borderRadius={100}
              backgroundColor={"gray.500"}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/v%C3%ADctor-trevijano-ramos-195b36183/"
                )
              }
            >
              {" "}
              <Icon as={FaLinkedin} boxSize="4" />
            </Button>
            <Button
              mt={8}
              ml={8}
              borderRadius={100}
              backgroundColor={"gray.500"}
              onClick={() => window.open("https://github.com/vtrev05")}
            >
              {" "}
              <Icon as={FaGithub} boxSize="4" />
            </Button>
            <Popover>
              <PopoverTrigger>
                <Button
                  mt={8}
                  ml={8}
                  borderRadius={100}
                  backgroundColor={"gray.500"}
                >
                  <Icon as={FaEnvelopeOpen} boxSize="4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Email Account:</PopoverHeader>
                <PopoverBody>
                  v.trevijano@gmail.com
                </PopoverBody>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger>
                <Button
                  mt={8}
                  ml={8}
                  borderRadius={100}
                  backgroundColor={"gray.500"}
                >
                  <Icon as={FaPhone} boxSize="4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Telephone number: </PopoverHeader>
                <PopoverBody>
                  +34 675273617
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default ContactInfo;
