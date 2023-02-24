import { Text, Box, Button, Image } from "@chakra-ui/react";


function Homethree(){
    return <Box w="85%" m="auto" mt="80px" display="flex" justifyContent="space-between" bg="#FAF1ED" >
        <Box textAlign="left" p="5px 20px">
            <Text fontWeight="600" mt="30px" fontSize='2xl'>Get out there</Text>
            <Text fontWeight="400" fontSize='md'>Best of the  Best tours, attractions & activities you won't want to miss.</Text>
            <Button mt="40px" fontWeight="700" color="white" bg="black" rounded="25px" p="23px 23px" >See the list</Button>
        </Box>
        <Image w="40%" h="200px" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1" alt="img" />
    </Box>
}

export default Homethree;