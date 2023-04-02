import { useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";

const TextInput = () => {
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
    } else {
      console.log(text);
    }
  };

  return (
    <>
      <Textarea
        bg="green.200"
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button
        bg="green.500"
        color="white"
        marginTop={4}
        width="100%"
        _hover={{ bg: "green.600" }}
        onClick={submitText}
      >
        Extract
      </Button>
    </>
  );
};

export default TextInput;
