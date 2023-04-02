import { Box, Image, Text, Flex } from "@chakra-ui/react";
import logo from "../assets/openai.svg";

const Footer = () => {
  return (
    <Box marginTop={50} paddingBottom={8}>
      <Flex justifyContent="center" alignItems="center">
        <Image src={logo} alt="OpenAI" marginRight={2} width={8} />
        <Text>Powered by OpenAI (GPT-3)</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
