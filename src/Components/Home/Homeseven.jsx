import { Box, Image, Text } from "@chakra-ui/react";


function Homeseven(){

    const data= [
        {
            id: 1,
            img: "https://media-cdn.tripadvisor.com/media/vr-splice-j/09/48/dd/9a.jpg",
            title: "Rentals in Raichak",
            count: "6 rentals"
        },
        {
            id: 2,
            img: "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/42/95/5f.jpg",
            title: "Rentals in Puri",
            count: "13 rentals"
        },
        {
            id: 3,
            img: "https://media-cdn.tripadvisor.com/media/vr-splice-j/04/b1/36/b2.jpg",
            title: "Rentals in Santiniketan",
            count: "12 rentals"
        }
    ]

    return <Box w="85%" m="auto" textAlign="left" mt="50px" mb="50px">
    <Text fontWeight="700" fontSize='3xl'>Home Rentals Near You</Text>
    <Box display="grid" justifyContent="space-between" gridTemplateColumns="repeat(4, 1fr)" gap="15px" mt="25px">
        <Box>
        <Text fontWeight="700" fontSize='2xl'>We think you'd enjoy these homes for a quick trip out of town.</Text>
        </Box>
        {data && data.map((el)=>{
            return <Box key={el.id}>
                <Image h="200px" w="100%" src={el.img} alt="" />
                <Text fontWeight="700" fontSize='lg'>{el.title}</Text>
                <Text fontWeight="500" fontSize='md'>{el.count}</Text>
            </Box>
        })}
    </Box>
</Box>
}

export default Homeseven;