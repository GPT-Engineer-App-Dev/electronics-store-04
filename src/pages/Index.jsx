import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Welcome to ElectroShop</Heading>
        <Text>Your one-stop shop for the latest electronics.</Text>
        <Button as={RouterLink} to="/products" colorScheme="blue">
          Shop Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;