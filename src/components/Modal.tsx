import {
  Text,
  Button,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  CircularProgress,
} from "@chakra-ui/react";

interface Props {
  keywords: string;
  loading: boolean;
  isOpen: boolean;
  closeModal: () => void;
}

const Modal = ({ keywords, loading, isOpen, closeModal }: Props) => {
  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Keywords</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" alignItems="center" justifyContent="center">
            {loading ? (
              <CircularProgress isIndeterminate color="green.600" />
            ) : (
              <Text>{keywords}</Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
};

export default Modal;
