import React from 'react'
import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';

const Header = () => {
    const { colorMode } = useColorMode();
    const isLight = colorMode === "light";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, purple.400, blue.500, cyan.400 )" bgClip='text' >Víctor Trevijano</Text>
                    <Text fontSize="2xl" color={isLight ? "gray.200" : "gray.500"}>FullStack Developer based in Madrid.</Text>
                    <Button mt={8} colorScheme="purple" onClick={() =>
                        window.open("https://formula1s.netlify.app/")
                    }>Main project</Button>

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "5" : "12"} ml="10" borderRadius='full'
                    backgroundColor="transparent"
                    boxSize="250px" src="https://www.evaxcode.com/img/EVAx-Code-logo.png" />
            </Flex>

        </Stack>
    )
}

export default Header
