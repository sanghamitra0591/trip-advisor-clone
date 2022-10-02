import { Box, Link, Image, Text  } from "@chakra-ui/react";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Signin from "./Signin";


function Navbar(){
    return <Box w="full" boxShadow='base' position="fixed" bg="white" zIndex={1}  p="3px 0px">
            <Box h="60px" w="85%" m="auto" display="flex" alignItems="center" justifyContent="space-between">
            <Link to="/">
            <Image boxSize='190px' src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="logo" />
            </Link>
            <Box display="flex" gap="25px" alignItems="center">
                <Link display="flex">
                    <ModeEditOutlineOutlinedIcon />
                    <Text fontWeight="500" fontSize='md'>Review</Text>
                </Link>
                <Link display="flex">
                    <FavoriteBorderOutlinedIcon />
                    <Text fontWeight="500" fontSize='md'>Trips</Text>
                </Link>
                <Link display="flex">
                    <NotificationsOutlinedIcon />
                    <Text fontWeight="500" fontSize='md'>Alerts</Text>
                </Link>
                <Link display="flex">
                    <Signin />
                </Link>
            </Box>
        </Box>
    </Box>
}

export default Navbar;