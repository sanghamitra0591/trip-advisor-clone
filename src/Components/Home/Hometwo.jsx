import { Box, Image, Text } from "@chakra-ui/react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Hometwo(){

    const data= [
        {
            id: 1,
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/3d/6b/0d/caption.jpg?w=300&h=300&s=1",
            title: "Kolkata-Sounds and Sights-Private Full Day City Tour",
            review: "32",
            price: "from ₹4,800 per adult"
        },
        {
            id: 2,
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c7/d9/ea/caption.jpg?w=300&h=300&s=1",
            title: "Private Half-Day Kolkata Tour",
            review: "23",
            price: "from ₹2,595 per adult"
        },
        {
            id: 3,
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/8c/36/6b/caption.jpg?w=300&h=300&s=1",
            title: "One Day Guided Kolkata Local Sightseeing Trip by Cab",
            review: "5",
            price: "from ₹6,000 per adult"
        },
        {
            id: 4,
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/42/4f/caption.jpg?w=300&h=300&s=1",
            title: "Day trip from Kolkata to Bishnupur for Terracotta Temples and Silk",
            review: "8",
            price: "from ₹13,496 per adult"
        }
    ]

    return <Box w="85%" m="auto" textAlign="left" mt="40px">
        <Text fontWeight="600" fontSize='2xl'>Ways to tour Kolkata (Calcutta)</Text>
        <Text fontSize='md'>Book these experiences for a close-up look at Kolkata (Calcutta).</Text>
        <Box display="grid" justifyContent="space-between" gridTemplateColumns="repeat(4, 1fr)" gap="15px" mt="15px">
            {data && data.map((el)=>{
                return <Box position="relative" key={el.id}>
                    <Image src={el.img} alt="" />
                    <Text fontWeight="600" fontSize='lg'>{el.title}</Text>
                    <Box w="90px" display="flex" gap="2px" alignItems="center">
                        <Box boxSize="12px" bg="green.400" rounded="50%" border="none"></Box>
                        <Box boxSize="12px" bg="green.400" rounded="50%" border="none"></Box>
                        <Box boxSize="12px" bg="green.400" rounded="50%" border="none"></Box>
                        <Box boxSize="12px" bg="green.400" rounded="50%" border="none"></Box>
                        <Box boxSize="12px" bg="green.400" rounded="50%" border="none"></Box>
                        <Text fontSize='sm' ml='5px'>{el.review}</Text>
                    </Box>
                    <Text fontWeight="500" fontSize='md'>{el.price}</Text>
                    <Box p="10px" display="flex" justifyContent="center" alignItems="center" bg="white" rounded="50%" position="absolute" top="10px" right="10px">
                        <FavoriteBorderIcon />
                    </Box>
                </Box>
            })}
        </Box>
    </Box>
}

export default Hometwo;