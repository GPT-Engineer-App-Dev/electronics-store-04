import { Box, Image, Text, Button, VStack, Heading } from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", description: "A high-end smartphone with a great camera.", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$999", description: "A powerful laptop for all your needs.", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: "$199", description: "Noise-cancelling headphones for immersive sound.", image: "https://via.placeholder.com/150" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Heading as="h2" size="xl">{product.name}</Heading>
        <Image src={product.image} alt={product.name} />
        <Text fontSize="lg">{product.price}</Text>
        <Text>{product.description}</Text>
        <Button as={Link} to="/products" colorScheme="teal">Back to Products</Button>
      </VStack>
    </Box>
  );
};

export default ProductDetail;