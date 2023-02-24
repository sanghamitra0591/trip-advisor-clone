import { Box, Image, Text } from "@chakra-ui/react";


function Homesix(){

    const data= [
        {
            id: 1,
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/66/68/f6/caption.jpg?w=300&h=300&s=1&cx=988&cy=664&chk=v1_d1b5b3f4c384c764b7e1",
            title: "Tulum Mexico"
        },
        {
            id: 2,
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/60/b0/bd/bora-bora.jpg?w=300&h=300&s=1",
            title: "Bora Bora, French Polynesia",
        },
        {
            id: 3,
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/dd/caption.jpg?w=300&h=300&s=1",
            title: "Tenerife, Spain"
        },
        {
            id: 4,
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f4/70/caption.jpg?w=300&h=300&s=1",
            title: "Hawaii"
        }
    ]

    return <Box w="85%" m="auto" pt="15px" textAlign="left" mt="40px">
                <Text fontWeight="700" fontSize='2xl'>Top destinations for beach lovers</Text>
                <Text fontSize='md'>Recommended based on your activity</Text>
                <Box display="grid" justifyContent="space-between" gridTemplateColumns="repeat(4, 1fr)" gap="15px" mt="15px">
                    {data && data.map((el)=>{
                        return <Box key={el.id} bg="white" pb="30px" position="relative" textAlign="left">
                            <Image filter='auto' brightness='65%' src={el.img} alt="img" />
                            <Text left="10px" color="white" position="absolute" bottom="30px" fontWeight="900" fontSize='3xl'>{el.title}</Text>
                        </Box>
                    })}
                </Box>
            </Box>
}

export default Homesix;