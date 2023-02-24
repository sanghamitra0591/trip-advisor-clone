import { Box, Image, Text } from "@chakra-ui/react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Homefour(){

    const data= [
        {
            id: 1,
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/68/2b/0f/merkmal-des-dal-sees.jpg?w=300&h=300&s=1",
            title: "Dal Lake",
            review: "4,218",
            type: "Bodies of Water"
        },
        {
            id: 2,
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/fa/d8/fd/photo2jpg.jpg?w=300&h=300&s=1",
            title: "Paradise Beach",
            review: "2,350",
            type: "Beaches"
        },
        {
            id: 3,
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b0/31/f4/the-beaut.jpg?w=300&h=300&s=1",
            title: "Double Decker Living Root Bridge",
            review: "813",
            type: "Bridges"
        },
        {
            id: 4,
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f5/cb/a2/the-morning-show.jpg?w=300&h=300&s=1",
            title: "Tiger Hill",
            review: "1,807",
            type: "Lookouts"
        }
    ]

    return <Box w="85%" m="auto" textAlign="left" mt="40px">
        <Text fontWeight="600" fontSize='2xl'>Scenic autumn spots</Text>
        <Box display="grid" justifyContent="space-between" gridTemplateColumns="repeat(4, 1fr)" gap="15px" mt="15px">
            {data && data.map((el)=>{
                return <Box position="relative" key={el.id}>
                    <Image src={el.img} alt="" />
                    <Text fontWeight="600" fontSize='md'>{el.title}</Text>
                    <Box w="110px" display="flex" gap="2px" alignItems="center">
                        <Box boxSize="12px" bg="green.400" rounded="50%" border="none"></Box>
                        <Box boxSize="12px" bg="green.400" rounded="50%" border="none"></Box>
                        <Box boxSize="12px" bg="green.400" rounded="50%" border="none"></Box>
                        <Box boxSize="12px" bg="green.400" rounded="50%" border="none"></Box>
                        <Box boxSize="12px" bg="green.400" rounded="50%" border="none"></Box>
                        <Text fontSize='sm' ml='5px'>{el.review}</Text>
                    </Box>
                    <Text fontWeight="400" fontSize='md'>{el.type}</Text>
                    <Box p="10px" display="flex" justifyContent="center" alignItems="center" bg="white" rounded="50%" position="absolute" top="10px" right="10px">
                        <FavoriteBorderIcon />
                    </Box>
                </Box>
            })}
        </Box>
    </Box>
}

export default Homefour;