import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Homeeight = () => {
  return (
    <Box w="100%" bg="#004f32">
      <Box w="88%" m="auto" h="600px" display={["inline", "inline", "flex"]} justifyContent="space-between" alignItems="center">
        <Box p={["20px", "20px", ""]} w={["80%", "70%", "30%"]} m={["auto", "auto", ""]}>
            <Box>
                <Image w="50%" m="auto" src="https://static.tacdn.com/img2/travelers_choice/TC_logomark_solid_cream.svg" alt="logo" />
                <Box>
                    <Text fontSize="35px" fontWeight="900" color="white">Travellers' Choice Best of the Best</Text>
                </Box>
            </Box>
            <Box mt="15%">
                <Button p="10px 20px" color="white" rounded="20px" bg="black">See the Winners</Button>
            </Box>
        </Box>
        <Box>
            <Image h={["", "", "600px"]} src="https://static.tacdn.com/img2/brand/feed/tc_cards_desktop2x.jpeg" alt="img" />
        </Box>
      </Box>
    </Box>
  )
}

export default Homeeight
