import { Heading, Box, Image } from "@chakra-ui/react";
import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box id={styles.footer_main} background="rgb(44, 19, 56)">
      <Box id={styles.footerNewmain}>
        <Box id={styles.footer_new}>
          <Image
            w="180px"
            paddingTop="50px"
            paddingLeft="50px"
            className={styles.logo1}
            src="https://www.zee5.com/images/play_store.png?ver=2.52.50"
          ></Image>
          <Image
            w="180px"
            paddingTop="50px"
            paddingLeft="50px"
            className={styles.logo1}
            src="https://www.zee5.com/images/app_store.png?ver=2.52.50"
          ></Image>
        </Box>
        <Box id={styles.footer_icons_div}>
          <Box id={styles.footer_aDiv}>
            <p style={{ marginRight: "20px", fontWeight: "bold" }}>
              Contact with us
            </p>
            <a href="" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>

            <a href="" target="_blank" rel="noreferrer">
              <FaYoutube />{" "}
            </a>
          </Box>
        </Box>
      </Box>
      <Box>
        <Heading
          className={styles.aboutTag}
          fontWeight={"400"}
          fontSize={"15px"}
          marginTop={"-50px"}
          marginBottom={"50px"}
        >
          About Us | Help center | Privacy Policy | Terms of Use
        </Heading>
      </Box>

      <Box className={styles.footer_grid}>
        <Box className={styles.footer_divs}>
          <Heading
            className={styles.foot_head}
            textAlign={"left !important"}
            mt={"20px !important"}
            mb={"15px !important"}
            color={"white !important"}
            fontSize={"15px"}
          >
            Popular TV Shows
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Kumkum Bhagya
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Kundali Bhagya
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Bhagya Lakshmi
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Tujhse Hai Raabta
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Kyun Rishton Mein Katti Batti
          </Heading>
        </Box>
        <Box className={styles.footer_divs}>
          <Heading
            className={styles.foot_head}
            textAlign={"left !important"}
            mt={"20px !important"}
            mb={"15px !important"}
            color={"white !important"}
            fontSize={"15px"}
          >
            Premium Movies
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Kya Meri Sonam Gupta Bewafa ?
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Helmet
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            200 Halla Ho
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            14 Phere
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Dial 100
          </Heading>
        </Box>
        <Box className={styles.footer_divs}>
          <Heading
            className={styles.foot_head}
            textAlign={"left !important"}
            mt={"20px !important"}
            mb={"15px !important"}
            color={"white !important"}
            fontSize={"15px"}
          >
            Popular LIVE TV Channels
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Aaj Tak
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Zee News
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Zee Tv HD
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            &TV HD
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Zee Marathi HD
          </Heading>
        </Box>
        <Box className={styles.footer_divs}>
          <Heading
            className={styles.foot_head}
            textAlign={"left !important"}
            mt={"20px !important"}
            mb={"15px !important"}
            color={"white !important"}
            fontSize={"15px"}
          >
            Popular Web Series
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Sunflower
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Jeet Ki Zid
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Biccho Ka Khel
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            State of Seige:26/11
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Naxalbari
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Tripling
          </Heading>
        </Box>
        <Box className={styles.footer_divs}>
          <Heading
            className={styles.foot_head}
            textAlign={"left !important"}
            mt={"20px !important"}
            mb={"15px !important"}
            color={"white !important"}
            fontSize={"15px"}
          >
            Bollywood Top Celebrities
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Sunny Leone
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Disha Patani
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Deepika Padukone
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Salman Khan
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Nora Fatehi
          </Heading>
        </Box>
        <Box className={styles.footer_divs}>
          <Heading
            className={styles.foot_head}
            textAlign={"left !important"}
            mt={"20px !important"}
            mb={"15px !important"}
            color={"white !important"}
            fontSize={"15px"}
          >
            Games & News
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Play
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Stories
          </Heading>
          <Heading
            className={styles.foot_para}
            fontWeight={"400"}
            color={"#747078"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontSize={"13px"}
          >
            Articles
          </Heading>
        </Box>
      </Box>

      <Box id={styles.footer_toggle_div}>
        <Box
          className={styles.foot_toggle_box1}
          w="700px"
          textAlign="left"
          marginLeft="50px"
        >
          <Heading
            className={styles.foot_icon_para}
            fontWeight={"400"}
            fontSize={"13px"}
            marginTop="25px"
            lineHeight="40px"
            color={"#747078"}
          >
            Best viewed on Google Chrome 80+, Safari 5.1.5+
          </Heading>
          <Heading
            className={styles.foot_icon_para}
            fontWeight={"400"}
            fontSize={"13px"}
            color={"#747078"}
          >
            Copyright © 2022 Zee Entertainment Enterprises Ltd. All rights
            reserved.
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
