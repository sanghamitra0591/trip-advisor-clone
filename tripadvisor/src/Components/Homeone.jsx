import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input } from "@chakra-ui/react";


function Homeone(){
    return <Box w="85%" m="auto" p="150px 100px" background='url(https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp) center/cover no-repeat' backgroundColor="red.100">
        <Box display="flex" rounded="40px" bg="white" p="8px 20px" w="85%" m="auto" alignItems="center" boxShadow='3xl'>
            <SearchIcon w={5} h={5} />
            <Input border="none" placeholder='Where to?' size='lg' />
        </Box>
    </Box>
}

export default Homeone;