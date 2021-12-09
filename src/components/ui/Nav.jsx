import React from 'react'
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode(); 
    const isDark = colorMode === "dark";
    return (
    <VStack>
        <Flex w="100%">
            <Spacer></Spacer>
            <IconButton mt="5" mr="5" ml={9} icon={isDark ? <FaSun /> : <FaMoon />} 
            isRound="true" onClick={toggleColorMode}></IconButton>
           
        </Flex>
    </VStack>
    )
}

export default Header
