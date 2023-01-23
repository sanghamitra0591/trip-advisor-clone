import { Box, Link, Image, Text, Button  } from "@chakra-ui/react";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Signin from "./Signin";
import { useEffect, useState } from "react";


function Navbar(){

    const [isscroll, setisscroll] = useState(false);
    function isScrolling() {
        if (window.scrollY > 80) {
            setisscroll(true);
        } else {
            setisscroll(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", isScrolling);
        return () => {
        window.removeEventListener("scroll");
        }
    }, [])

    
    const [isAuth, setAuth]= useState(false);

    return <Box w="full" boxShadow={ isscroll? 'md' : "sm"} position="fixed" bg="white" zIndex={1}  p="3px 0px">
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
                    {isAuth ? 
                    <Button color="black" onClick={()=>{
                        setAuth(!isAuth);
                    }}>Sanghamitra</Button> : <Signin />
                }
                </Link>
                <Link display="flex">
                    <ShoppingCartOutlinedIcon />
                    <Text fontWeight="500" fontSize='md'>Basket</Text>
                </Link>
            </Box>
        </Box>
    </Box>
}

export default Navbar;