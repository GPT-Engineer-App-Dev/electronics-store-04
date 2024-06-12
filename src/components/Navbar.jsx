import { Box, Flex, Link, Spacer, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" p={4} color="white">
      <Flex maxW="1200px" mx="auto" align="center">
        <Heading size="md">ElectroShop</Heading>
        <Spacer />
        <Link as={RouterLink} to="/" mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/products" mx={2}>
          Products
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;