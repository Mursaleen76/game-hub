// src/components/ui/color-mode.tsx
// (or rename to ColorModeSwitch.tsx if you prefer – then update imports accordingly)

import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing={3} align="center">
      <Switch
        colorScheme="green" // or "teal", "blue", etc.
        size="md"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text fontSize="sm" whiteSpace="nowrap">
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
