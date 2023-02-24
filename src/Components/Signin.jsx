import { ViewIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";

function Signin(){

    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [scrollBehavior] = React.useState('inside')


    function handleSubmit(){
      alert("Successfully Logged in");
      window.location.reload();
    }


    return <>


    <Button onClick={onOpen}  fontWeight="500" bg="black" p="8px 15px" borderRadius="3xl" color="white" fontSize='md'>Sign in</Button>

    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      size= "lg"
      scrollBehavior={scrollBehavior}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody pb={6} p="10px 60px">

            <Image boxSize="220px" m="-55px 0px"  src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_Logo_dark-bg_circle-green_horizontal-lockup_registered_RGB.svg" alt="logo" />

            <Text fontSize="3xl" color="black" mb="20px" fontWeight="500">Welcome.</Text>

            <FormControl>
                <FormLabel fontWeight="600" fontSize="md">Email address</FormLabel>
                <Input outline="none" ref={initialRef} placeholder='Email' type="email" />
            </FormControl>

            <FormControl mt={3}>
                <FormLabel fontWeight="600" fontSize="md">Password</FormLabel>
                <Box display="flex" alignItems="center">
                    <Input outline="none" type="password" placeholder='Password' />
                    <ViewIcon ml="-25px" />
                </Box>
            </FormControl>

            <Text mt="10px" ml="5px" textDecoration="underline" color="black" fontWeight="400" fontSize="md">Forgot Password?</Text>

            <FormControl textAlign="center">
                <Button onClick={()=>{
                  handleSubmit();
                }} fontWeight="700" bg="black" p="27px 25px" w="80%" m="auto" mt="20px" borderRadius="3xl" color="white" fontSize='md'>Sign in</Button>
            </FormControl>

            <Box w="97%" m="auto" mt="25px" display="flex" gap="8px" alignItems="center">
                <Divider></Divider>
                <Text w="100%" fontSize="md">Not a member ?</Text>
                <Divider></Divider>
            </Box>

            <Text mt="20px" textAlign="center" fontSize="md"><u><b>Join</b></u> to unlock the best of Tripadvisor.</Text>

            <Text mt="25px" textAlign="center" fontSize="xs">By proceeding, you agree to our <u>Terms of Use</u> and confirm
             you have read our <u>Privacy and Cookie Statement</u>.</Text>

            <Text mt="15px" textAlign="center" mb="20px" fontSize="xs">This site is protected by reCAPTCHA and the Google <u>Privacy
             Policy</u> and <u>Terms of Service</u> apply.</Text>

        </ModalBody>
      </ModalContent>
    </Modal>
  </>
}

export default Signin;