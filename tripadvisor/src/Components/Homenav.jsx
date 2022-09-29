import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function HomeNav(){
    return <Box h="100px" w="85%" m="auto" pt="100px" mb="80px" display="grid" gridTemplateColumns="repeat(6, 1fr)" alignItems="center" gap="15px">
        <Box borderRadius='xl' p="13px 20px" fontWeight="500" fontSize='md' border="1.5px solid black" justifyContent="space-between" display="flex" gap="20px" alignItems="center">
            <Link fontSize='md'>Hotels</Link>
            <BedroomChildOutlinedIcon/>
        </Box>
        <Box borderRadius='xl' p="13px 10px" fontWeight="500" fontSize='md' border="1.5px solid black" justifyContent="space-between" display="flex" gap="20px" alignItems="center">
            <Link fontSize='md'>Holiday Homes</Link>
            <OtherHousesOutlinedIcon />
        </Box>
        <Box borderRadius='xl' p="13px 10px" fontWeight="500" fontSize='md' border="1.5px solid black" justifyContent="space-between" display="flex" gap="20px" alignItems="center">
            <Link fontSize='md'>Things to Do</Link>
            <LocalActivityOutlinedIcon />
        </Box>
        <Box borderRadius='xl' p="13px 20px" fontWeight="500" fontSize='md' border="1.5px solid black" justifyContent="space-between" display="flex" gap="20px" alignItems="center">
            <Link>Restaurants</Link>
            <LocalDiningOutlinedIcon />
        </Box>
        <Box borderRadius='xl' p="13px 10px" fontWeight="500" fontSize='md' border="1.5px solid black" justifyContent="space-between" display="flex" gap="20px" alignItems="center">
            <Link fontSize='md'>Travel Forums</Link>
            <ForumOutlinedIcon />
        </Box>
        <Box borderRadius='xl' p="13px 20px" fontWeight="500" fontSize='md' border="1.5px solid black" justifyContent="space-between" display="flex" gap="20px" alignItems="center">
            <Link fontSize='md'>More</Link>
            <MoreHorizIcon />
        </Box>
    </Box>
}
export default HomeNav;