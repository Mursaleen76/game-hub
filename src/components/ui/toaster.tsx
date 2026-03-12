// Example: in any component where you want to show a toast
import { useToast, Button } from "@chakra-ui/react";

function ExampleComponent() {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-right", // or "bottom", "top", etc.
    });
  };

  return <Button onClick={showToast}>Show Success Toast</Button>;
}
