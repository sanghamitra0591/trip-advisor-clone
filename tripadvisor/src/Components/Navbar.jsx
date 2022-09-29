import { Box, Link, Image, Text  } from "@chakra-ui/react";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';


function Navbar(){
    return <Box h="100px" w="85%" m="auto" display="flex" alignItems="center" justifyContent="space-between">
        <Link to="/">
        <Image boxSize='150px' src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="logo" />
        </Link>
        <Box display="flex" gap="20px" alignItems="center">
            <Link display="flex">
                <ModeEditOutlineOutlinedIcon />
                <Text fontSize='md'>Review</Text>
            </Link>
            <Link display="flex">
                <FavoriteBorderOutlinedIcon />
                <Text fontSize='md'>Trim</Text>
            </Link>
            <Link display="flex">
                <NotificationsOutlinedIcon />
                <Text fontSize='md'>Alerts</Text>
            </Link>
            <Link display="flex">
                <Text bg="black" p="8px 15px" borderRadius="2xl" color="white" fontSize='md'>Sign in</Text>
            </Link>
        </Box>
    </Box>
}

export default Navbar;