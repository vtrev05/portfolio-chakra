import React from 'react'
import { Image } from "@chakra-ui/image";
import {  Flex, Text, Container } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import Icon from "@chakra-ui/icon";
import { FaArrowRight } from "react-icons/fa";
import styled  from '@emotion/styled';

const Span = styled.span`
    color: #3182ce;
`

const Info = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const [image] = useMediaQuery("(min-width:900px)")

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
           boxSize='240px'
           borderRadius="full"
           objectFit='cover'
           src="https://i.imgur.com/0KzPXH9.jpeg" alt="" />
        <Container
        /* position={isNotSmallerScreen ? "relative" : "initial"} */
        textAlign={isNotSmallerScreen ? "left" : "left"}
        mb={"40px"}
        /* left={"140px"} */>
            <Text  fontSize="5xl" fontWeight="semibold">
            Víctor Trevijano
            </Text>
            <Text mt={"20px"} fontSize="2xl" fontWeight="semibold">
            <Icon as={FaArrowRight} boxSize="4" color={"#3182ce"} mr={"10px"}></Icon><Span>Occupation:</Span> FullStack Developer
            </Text>
            <Text mt={"20px"} fontSize="2xl" fontWeight="semibold">
            <Icon as={FaArrowRight} boxSize="4" color={"#3182ce"} mr={"10px"}></Icon><Span>Birthday:</Span>  13/05/1996
            </Text>
            <Text mt={"20px"} fontSize="2xl" fontWeight="semibold">
            <Icon as={FaArrowRight} boxSize="4" color={"#3182ce"} mr={"10px"}></Icon><Span>City:</Span> Madrid, Spain
            </Text>
            <Text lineHeight={2.25} mt={"20px"} fontSize="lg">
            Mi carrera profesional se ha formado en el mundo empresarial, lo
            que me ha posibilitado aprender el funcionamiento de la empresa
            desde diferentes perspectivas y áreas.
            Mi inquietud por seguir aprendiendo me ha llevado a introducirme
            en el mundo de la programación de forma autodidacta en busca de
            afrontar nuevos retos profesionales.
            </Text>
        </Container>
        </Flex>
        <Container>
            <Text color={"#3182ce"} fontSize={"4xl"} textAlign={"left"}>Studies</Text>
            <Text textDecoration={"underline"} mt={"20px"} fontSize="2xl" fontWeight="semibold" textAlign={"left"}>Upgrade-Hub</Text>
            <Text  mt={"20px"} fontSize="lg" fontStyle={"italic"} fontWeight="200" textAlign={"left"}>Curso intensivo de Desarrollo Full-Stack // 2021</Text>
            <Text lineHeight={"1.75"} mt={"20px"} fontSize="lg"  textAlign={"left"}>
                Uso profesional de tecnologías tanto front-end como back-end. Entre ellas destacan React y Angular como principales frameworks/librerías de front basadas en Javascript. Además, en back he podido aprender bases de datos SQL y NOSQL. 
            </Text>
            <Text textDecoration={"underline"} mt={"20px"} fontSize="2xl" fontWeight="semibold" textAlign={"left"}>Universidad Rey Juan Carlos</Text>
            <Text  mt={"20px"} fontSize="lg" fontStyle={"italic"} fontWeight="200" textAlign={"left"}>Grado en Administración y Dirección de Empresas // 2014-2020</Text>
            <Text textDecoration={"underline"} mt={"20px"} fontSize="2xl" fontWeight="semibold" textAlign={"left"}>Universidad Rey Juan Carlos</Text>
            <Text  mt={"20px"} fontSize="lg" fontStyle={"italic"} fontWeight="200" textAlign={"left"}>Grado en Comunicación Audiovisual // 2014-2020</Text>
        </Container>  
        </>
    )
}

export default Info
