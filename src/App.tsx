import { useState } from "react";
import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";
import Modal from "./components/Modal";

const App = () => {
  const [keywords, setKeywords] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeywords = async (text: string): Promise<void> => {
    setLoading(true);
    setIsOpen(true);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_SECRET}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt:
          "Extract keywords from this text. Make the first letter of each word uppercase and separate the words with commas.\n\n" +
          text +
          "",
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      }),
    };

    try {
      const res = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);
      const json = await res.json();
      const data = json.choices[0].text.trim();
      setKeywords(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Box
      bg="green.100"
      color="black"
      minH="100vh"
      height="100%"
      paddingTop={130}
    >
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
      <Modal
        keywords={keywords}
        loading={loading}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </Box>
  );
};

export default App;
