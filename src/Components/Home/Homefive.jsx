import { Box, Image, Text } from "@chakra-ui/react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Homefive(){

    const data= [
        {
            id: 1,
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/ab/94/ba/2de5214a-d5dc-42d2.jpg?w=400&h=-1&s=1",
            title: "5 Beautiful hill stations in south India"
        },
        {
            id: 2,
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/20/d4/45276d36-cc36-4a32.jpg?w=400&h=-1&s=1",
            title: "11 Beautiful places in India that have to be seen to be believed"
        },
        {
            id: 3,
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/2e/9a/2520956e-5665-4e9f.jpg?w=400&h=-1&s=1",
            title: "Best time to visit Dubai for great weather and deals"
        }
    ]

    return <Box bg="#FAF1ED" p="5px 0px" mt="40px" pb="35px">
            <Box w="85%" m="auto" textAlign="left" mt="40px">
            <Text fontWeight="600" fontSize='2xl'>More to Explore</Text>
            <Box display="grid" justifyContent="space-between" gridTemplateColumns="repeat(3, 1fr)" gap="15px" mt="15px">
                {data && data.map((el)=>{
                    return <Box bg="white" pb="30px" position="relative" textAlign="center" key={el.id}>
                        <Image src={el.img} alt="" />
                        <Text mt="20px" fontWeight="500" fontSize='md'>From Tripadvisor</Text>
                        <Text fontWeight="500" fontSize='lg'>{el.title}</Text>
                        <Box p="10px" display="flex" justifyContent="center" alignItems="center" bg="white" rounded="50%" position="absolute" top="10px" right="10px">
                            <FavoriteBorderIcon />
                        </Box>
                    </Box>
                })}
            </Box>
        </Box>
    </Box>
}

export default Homefive;