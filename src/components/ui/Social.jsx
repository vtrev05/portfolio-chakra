import React from 'react'
import './Social.css'
import Icon from '@chakra-ui/icon'
import { Flex, HStack, Text } from '@chakra-ui/layout'
import { FaGithub, FaFilePdf, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa'

const Social = () => {
    return (
        <HStack spacing="24">
            <Flex w="100%" justifyContent="space-around">
                <a href="https://github.com/vtrev05" target="blank">
                    <Icon as={FaGithub} boxSize="4" />
                    <Text ml="3" display="inline-block" fontSize="xl" fontWeight="semibold">vtrev05</Text>
                </a>
                <a href="tel:+34675273617" target="blank">
                    <Icon as={FaPhone} boxSize="4" />
                    <Text ml="3" display="inline-block" fontSize="xl" fontWeight="semibold">675273617</Text>
                </a>
                <a href="mailto:v.trevijano@gmail.com" target="blank">
                    <Icon as={FaEnvelope} boxSize="4" />
                    <Text ml="3" display="inline-block" fontSize="xl" fontWeight="semibold">v.trevijano@gmail.com</Text>
                </a>
                <a href="https://www.linkedin.com/in/v%C3%ADctor-trevijano-ramos-195b36183/" target="blank">
                    <Icon as={FaLinkedin} boxSize="4" />
                    <Text ml="3" display="inline-block" fontSize="xl" fontWeight="semibold">Linkedin</Text>
                </a>
                {/* <a href="../../assets/images/documents/CV VICTOR TREVIJANO.pdf" target="blank">
                    <Icon as={FaFilePdf} boxSize="4" />
                    <Text ml="3" display="inline-block" fontSize="xl" fontWeight="semibold">Download CV</Text>
                </a> */}
            </Flex>
        </HStack>
    )
}

export default Social
