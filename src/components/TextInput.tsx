import { useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";

interface Props {
  extractKeywords: (text: string) => void;
}

const TextInput = ({ extractKeywords }: Props) => {
  const [text, setText] = useState("");

  const toast = useToast();

  const submitText = () => {
    if (text === "") {
      toast({
        title: "Nothing has been inserted",
        description: "Please insert your text before submitting",
        status: "error",
        duration: 4000,
        isClosable: false,
      });

      return;
    }

    extractKeywords(text);
  };

  return (
    <>
      <Textarea
        bg="green.200"
        padding={4}
        marginTop={6}
        height={240}
        _hover={{ borderColor: "green.300" }}
        _focus={{ borderColor: "green.400", outlineColor: "green.400" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button
        bg="green.500"
        color="white"
        marginTop={4}
        width="100%"
        _hover={{ bg: "green.600" }}
        _focus={{ boxShadow: "0 0 0 3px #9AE6B4" }}
        onClick={submitText}
      >
        Extract
      </Button>
    </>
  );
};

export default TextInput;
