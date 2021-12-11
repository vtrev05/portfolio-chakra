import React from "react";
import { Image } from "@chakra-ui/image";
import { Flex, Text, Container } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import Icon from "@chakra-ui/icon";
import { FaArrowRight } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import styled from "@emotion/styled";

const Span = styled.span`
  color: #3182ce;
`;

const Info = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const [image] = useMediaQuery("(min-width:900px)");

  return (
    <>
      <Flex
        m="100px auto 0"
        direction={isNotSmallerScreen ? "row" : "column"}
        p={isNotSmallerScreen ? "0" : "0"}
        alignSelf="flex-start"
      >
        <Image
          mt={isNotSmallerScreen ? "8" : "12"}
          mb={isNotSmallerScreen ? "5" : "12"}
          display={image ? "inline-block" : "none"}
          position={"absolute"}
          right={"250px"}
          top={"160px"}
          boxSize="240px"
          borderRadius="full"
          objectFit="cover"
          src="https://i.imgur.com/0KzPXH9.jpeg"
          alt=""
        />
        <Container
          /* position={isNotSmallerScreen ? "relative" : "initial"} */
          textAlign={isNotSmallerScreen ? "left" : "left"}
          mb={"40px"}
          /* left={"140px"} */
        >
          <Text fontSize="5xl" fontWeight="semibold">
            Víctor Trevijano
          </Text>
          <Text mt={"20px"} fontSize="2xl" fontWeight="semibold">
            <Icon
              as={FaArrowRight}
              boxSize="4"
              color={"#3182ce"}
              mr={"10px"}
            ></Icon>
            <Span>
              {" "}
              <FormattedMessage
                id="info.occupation"
                defaultMessage="Occupation: "
              />
            </Span>
            <FormattedMessage
              id="info.job"
              defaultMessage="FullStack Developer"
            />
          </Text>
          <Text mt={"20px"} fontSize="2xl" fontWeight="semibold">
            <Icon
              as={FaArrowRight}
              boxSize="4"
              color={"#3182ce"}
              mr={"10px"}
            ></Icon>
            <Span>
              {" "}
              <FormattedMessage
                id="info.birthday"
                defaultMessage="Birthday: "
              />
            </Span>
            <FormattedMessage
              id="info.birthday.day"
              defaultMessage="13/05/1996"
            />
          </Text>
          <Text mt={"20px"} fontSize="2xl" fontWeight="semibold">
            <Icon
              as={FaArrowRight}
              boxSize="4"
              color={"#3182ce"}
              mr={"10px"}
            ></Icon>
            <Span>
              {" "}
              <FormattedMessage id="info.city" defaultMessage="City: " />
            </Span>
            <FormattedMessage
              id="info.city.value"
              defaultMessage="Madrid, Spain"
            />
          </Text>
          <Text lineHeight={2.25} mt={"20px"} fontSize="lg">
            <FormattedMessage
              id="info.career"
              defaultMessage="My professional career has been formed in the business world, that has allowed me to learn how the company works from different perspectives and areas. My concern to continue learning made me start studying programming in a self-taught way in search of face new professional challenges."
            />
          </Text>
        </Container>
      </Flex>
      <Container>
        <Text color={"#3182ce"} fontSize={"4xl"} textAlign={"left"}>
          <FormattedMessage id="info.studies.title" defaultMessage="Studies" />
        </Text>
        <Text
          textDecoration={"underline"}
          mt={"20px"}
          fontSize="2xl"
          fontWeight="semibold"
          textAlign={"left"}
        >
          <FormattedMessage
            id="info.studies.upgrade"
            defaultMessage="Upgrade-Hub"
          />
        </Text>
        <Text
          mt={"20px"}
          fontSize="lg"
          fontStyle={"italic"}
          fontWeight="200"
          textAlign={"left"}
        >
          <FormattedMessage
            id="info.studies.upgrade.subtitle"
            defaultMessage="Intensive Full-Stack Development Course // 2021"
          />
        </Text>
        <Text lineHeight={"1.75"} mt={"20px"} fontSize="lg" textAlign={"left"}>
          <FormattedMessage
            id="info.studies.upgrade.body"
            defaultMessage="Professional use of both front-end and back-end technologies. React and Angular stand out as the main frameworks / libraries for the front-end based on Javascript. In addition, in the back I have been able to learn SQL and NOSQL databases."
          />
        </Text>
        <Text
          textDecoration={"underline"}
          mt={"20px"}
          fontSize="2xl"
          fontWeight="semibold"
          textAlign={"left"}
        >
            <FormattedMessage
            id="info.studies.urjc.title"
            defaultMessage="Universidad Rey Juan Carlos"
          />
         
        </Text>
        <Text
          mt={"20px"}
          fontSize="lg"
          fontStyle={"italic"}
          fontWeight="200"
          textAlign={"left"}
        >
             <FormattedMessage
            id="info.studies.urjc.ade"
            defaultMessage="Business Administration and Management Degree // 2014-2020"
          />
        </Text>
        <Text
          textDecoration={"underline"}
          mt={"20px"}
          fontSize="2xl"
          fontWeight="semibold"
          textAlign={"left"}
        >
          <FormattedMessage
            id="info.studies.urjc.title"
            defaultMessage="Universidad Rey Juan Carlos"
          />
        </Text>
        <Text
          mt={"20px"}
          fontSize="lg"
          fontStyle={"italic"}
          fontWeight="200"
          textAlign={"left"}
        >
        <FormattedMessage
            id="info.studies.urjc.cau"
            defaultMessage="Audiovisual Communication Degree // 2014-2020"
          />
        </Text>
      </Container>
    </>
  );
};

export default Info;
