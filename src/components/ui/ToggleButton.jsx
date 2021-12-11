import React, { useContext } from "react";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Spacer } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Context } from "../../context/WrapperLang";
import { FormattedMessage } from "react-intl";

const ToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const context = useContext(Context);

  return (
    <VStack>
      <Flex w="100%">
        <Spacer></Spacer>
        <Select
          mt="5"
          mr="5"
          ml={9}
          w="110px"
          value={context.locale}
          onChange={context.selectLanguage}
        >
          <option value="es-ES">Español</option>
          <option value="en">English</option>
        </Select>
        <IconButton
          mt="5"
          mr="5"
          ml={9}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
    </VStack>
  );
};

export default ToggleButton;
