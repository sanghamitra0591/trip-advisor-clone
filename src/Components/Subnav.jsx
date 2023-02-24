import { Box, Menu, MenuButton, MenuItem, MenuList, Portal } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function SubNav(){
    return <Box h="100px" w="85%" m="auto" pt="100px" mb="80px" display="grid" gridTemplateColumns="repeat(6, 1fr)" alignItems="center" gap="15px">
        <Box h="50px" _hover={{bg:"black", color:"white"}} borderRadius='xl' p="10px 16px" fontWeight="500" fontSize='md' border="1.5px solid black" justifyContent="space-between" display="flex" alignItems="center">
            <Link fontSize='md'>Hotels</Link>
            <BedroomChildOutlinedIcon/>
        </Box>
        <Box h="50px" _hover={{bg:"black", color:"white"}} borderRadius='xl' p="10px 10px" fontWeight="500" fontSize='md' border="1.5px solid black" justifyContent="space-between" display="flex" alignItems="center">
            <Link fontSize='md'>Holiday Homes</Link>
            <OtherHousesOutlinedIcon />
        </Box>
        <Box h="50px" _hover={{bg:"black", color:"white"}} borderRadius='xl' p="10px 16px" fontWeight="500" fontSize='md' border="1.5px solid black" justifyContent="space-between" display="flex" alignItems="center">
            <Link fontSize='md'>Things to Do</Link>
            <LocalActivityOutlinedIcon />
        </Box>
        <Box h="50px" _hover={{bg:"black", color:"white"}} borderRadius='xl' p="10px 16px" fontWeight="500" fontSize='md' border="1.5px solid black" justifyContent="space-between" display="flex" alignItems="center">
            <Link>Restaurants</Link>
            <LocalDiningOutlinedIcon />
        </Box>
        <Box h="50px" _hover={{bg:"black", color:"white"}} borderRadius='xl' p="10px 13px" fontWeight="500" fontSize='md' border="1.5px solid black" justifyContent="space-between" display="flex" alignItems="center">
            <Link fontSize='md'>Travel Forums</Link>
            <ForumOutlinedIcon />
        </Box>
        <Box h="50px" _hover={{bg:"black", color:"white"}} borderRadius='xl' p="10px 16px" fontWeight="500" fontSize='md' border="1.5px solid black" justifyContent="space-between" display="flex" alignItems="center">
            <Menu w="100%">
                <MenuButton w="100%" justifyContent="space-between" display="flex" gap="20px" alignItems="center">
                    <Box fontWeight="500" fontSize='md' w="100%" justifyContent="space-between" display="flex" gap="20px" alignItems="center">
                    <Link fontSize='md'>More</Link>
                    <MoreHorizIcon /></Box>
                </MenuButton>
                <Portal>
                    <MenuList color="black" w="80%" m="auto" ml="-15%" >
                        <MenuItem mt="10px" fontWeight="500" fontSize='17px'><Link>Add a Place</Link></MenuItem>
                        <MenuItem mt="10px" fontWeight="500" fontSize='17px'><Link>Airlines</Link></MenuItem>
                        <MenuItem mt="10px" fontWeight="500" fontSize='17px'><Link>Flights</Link></MenuItem>
                        <MenuItem mt="10px" fontWeight="500" fontSize='17px'><Link>Help Centre</Link></MenuItem>
                        <MenuItem mt="10px" fontWeight="500" fontSize='17px'><Link>Package Holidays</Link></MenuItem>
                        <MenuItem mt="10px" fontWeight="500" fontSize='17px'><Link>Travel Forums</Link></MenuItem>
                        <MenuItem mt="10px" fontWeight="500" fontSize='17px'><Link>Travellers' Choice</Link></MenuItem>
                    </MenuList>
                </Portal>
            </Menu>
        </Box>
    </Box>
}
export default SubNav;