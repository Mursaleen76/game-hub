// src/components/ui/Provider.tsx   (optional wrapper – you can skip this file completely if you want)
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme"; // adjust path to your theme file

interface ProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
