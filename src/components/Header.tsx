import { Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/bulb.svg";

const Header = () => {
  return (
    <>
      <Image src={logo} alt="Logo" width={100} marginBottom="1rem" />
      <Heading color="black" marginBottom="1rem">
        AI Keyword Extractor
      </Heading>
      <Text fontSize={24} textAlign="center">
        Insert your text below and we will extract the keywords for you
      </Text>
    </>
  );
};

export default Header;
