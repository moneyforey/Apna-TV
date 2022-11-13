import { Image, Input } from "@chakra-ui/react";
import {
  Flex,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../util/AT.png"
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DragHandleIcon, HamburgerIcon } from "@chakra-ui/icons";
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/auth/auth.action";

const Navbar = () => {
  const loginDetail = useSelector((store)=>store.auth.token)
  const dispatch =  useDispatch()
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,hi,bn,gu,mr",
        // includedLanguages: "en",
        autoDisplay: false,
        multilanguagePage: false,
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "translate"
    );
  };

  var addScript = document.createElement("script");
  addScript.setAttribute(
    "src",
    "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  );

  document.body.appendChild(addScript);
  window.googleTranslateElementInit = googleTranslateElementInit;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen1, onOpen1, onClose1 } = useDisclosure();

  return (
    <HStack
      fontSize={"1rem"}
      className={styles.Navbar}
      p="1.6rem 2rem"
      align="center"
      w="100%"
      color="white"
      justify={"space-between"}
    >
      <HStack className={styles.left} spacing={"1.8rem"} display="flex">
        <Link to="/">
          <Image
            className={styles.logo}
            src={logo}
            alt="logo"
          />
        </Link>
        <Box className={styles.nav}>
          <Text>Home</Text>
        </Box>
        <Box className={styles.nav}>
          <Text>
            <Link to={"/"}> TV Shows</Link>
          </Text>
        </Box>
        <Box className={styles.nav}>
          <div className={styles.navbar_options_softwareDown}>
            <Text>Movies</Text>
          </div>
        </Box>
        <Box className={styles.nav}>
          <div className={styles.navbar_options_softwareDown}>
            <Text>Web Series</Text>
          </div>
        </Box>
        <Box className={styles.nav}>
          <div className={styles.navbar_options_softwareDown}>
            <Text>News</Text>
          </div>
        </Box>
      </HStack>

      <Box style={{ marginLeft: "-100px" }} className={styles.hoverBox}>
        <Flex height="100vh" align="center" justifyContent="center">
          <Menu isOpen={isOpen}>
            <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
              <DragHandleIcon />
            </MenuButton>
            <MenuList
              bg="black"
              pl="20px"
              colorscheme="teal"
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
             
            >
              <MenuItem  _hover={{color: "black", backgroundColor: "white"}}>Eduauraa</MenuItem>
              <MenuItem _hover={{color: "black", backgroundColor: "white"}}>Premium</MenuItem>
              <MenuItem _hover={{color: "black", backgroundColor: "white"}}>Live TV</MenuItem>
              <MenuItem _hover={{color: "black", backgroundColor: "white"}}>Music</MenuItem>
              <MenuItem _hover={{color: "black", backgroundColor: "white"}}>Rent</MenuItem>
              <MenuItem _hover={{color: "black", backgroundColor: "white"}}>Kids</MenuItem>
              <MenuItem _hover={{color: "black", backgroundColor: "white"}}>Video</MenuItem>
              <MenuItem _hover={{color: "black", backgroundColor: "white"}}>Channel</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
      <HStack spacing={"1.8rem"} className={styles.right} display="flex">
        <Box style={{ marginRight: "50px" }} className={styles.search}>
          <Input placeholder="Search for Movies,Shows, Channel etc" />
        </Box>

        <Box
          // id="translate"
          className={styles.translateIcon}
        >
          {/* <i class="fa-light fa-language"></i> */}
          <img
            style={{ height: "30px", width: "80px" }}
            src="https://play-lh.googleusercontent.com/ZrNeuKthBirZN7rrXPN1JmUbaG8ICy3kZSHt-WgSnREsJzo2txzCzjIoChlevMIQEA=w600-h300-pc0xffffff-pd"
            alt=""
          />
        </Box>

        <Box>

          <Button  colorScheme="white" variant="outline">
          { 
              loginDetail ? <Text  onClick={()=> dispatch(logout())}>Logout</Text>:<Link to="/login">Log in</Link>
          }
          </Button>
        </Box>
        <Box className={styles.roundBtn}>
          <Link to="/buy">BUY PLANS</Link>
        </Box>
        <Box>
          <Flex height="100vh" align="center" justifyContent="center">
            <Menu  zIndex="25" isOpen1={isOpen1}>
              <MenuButton onMouseEnter={onOpen1} onMouseLeave={onClose1}>
                <HamburgerIcon w={8} h={6} />
              </MenuButton>
              <MenuList
                className={styles.menulist}
                bg="black"
                pl="20px"
                p="20px"
                mr="-32px"
                w="400px"
                h="650px"
                zIndex="25" 
                // colorScheme="teal"
                onMouseEnter={onOpen1}
                onMouseLeave={onClose1}
               
              >
                <MenuItem _hover={{color: "black", backgroundColor: "white"}} fontWeight="bold" m="10px">
                  Home
                </MenuItem>
                <hr />
                <MenuItem _hover={{color: "black", backgroundColor: "white"}} fontWeight="bold" m="10px">
                  Explores
                </MenuItem>
                <hr />
                <MenuItem _hover={{color: "black", backgroundColor: "white"}} fontWeight="bold" m="10px">
                  Plans
                </MenuItem>
                <MenuItem _hover={{color: "black", backgroundColor: "white"}} fontWeight="bold" m="10px">
                  Buy Plans
                </MenuItem>
                <MenuItem _hover={{color: "black", backgroundColor: "white"}} fontWeight="bold" m="10px">
                  Have a Prepaid Code ?
                </MenuItem>
                <hr />
                <MenuItem _hover={{color: "black", backgroundColor: "white"}} fontWeight="bold" m="10px">
                  Settings
                </MenuItem>
                <MenuItem _hover={{color: "black", backgroundColor: "white"}} fontWeight="bold" m="10px">
                  Reset Settings to Default
                </MenuItem>
                <hr />
                <MenuItem _hover={{color: "black", backgroundColor: "white"}} fontWeight="bold" m="10px">
                  Info
                </MenuItem>
                <MenuItem _hover={{color: "black", backgroundColor: "white"}} fontWeight="bold" m="10px">
                  About Us
                </MenuItem>
                <MenuItem _hover={{color: "black", backgroundColor: "white"}} fontWeight="bold" m="10px">
                  Help Center
                </MenuItem>
                <MenuItem _hover={{color: "black", backgroundColor: "white"}} fontWeight="bold" m="10px">
                  Terms Of Use
                </MenuItem>
                <MenuItem _hover={{color: "black", backgroundColor: "white"}} fontWeight="bold" m="10px">
                  Privacy Policy
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
      </HStack>
    </HStack>
  );
};

export default Navbar;
