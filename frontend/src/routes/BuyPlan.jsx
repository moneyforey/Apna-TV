import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

import styles from "./BuyPlan.module.css";
import {AiFillCheckCircle, AiOutlineQuestionCircle, AiOutlineCheck } from "react-icons/ai";
import { BsDisplay } from "react-icons/bs";

const BuyPlans =()=>{
    return(
        <>
        <Flex>
            <Stack>
                <Heading className={styles.hd}>Watch Ad-Free with Premium!</Heading>
                <Flex className={styles.flexitems}>
                    <AiOutlineCheck color="pink"/>
                    <Text className={styles.tx}>2800+ Blockbuster Movies</Text>
                    <AiOutlineQuestionCircle/>
                </Flex>
                <Flex  className={styles.flexitems}>
                <AiOutlineCheck color="pink"/>
                    <Text className={styles.tx}>200+ Web Series</Text>
                    <AiOutlineQuestionCircle/>
                </Flex>
                <Flex  className={styles.flexitems}>
                <AiOutlineCheck color="pink"/>
                    <Text className={styles.tx}>Live TV, Before TV and Downloads</Text>
                    <AiOutlineQuestionCircle/>
                </Flex>
                <Flex  className={styles.flexitems}>
                <AiOutlineCheck color="pink"/>
                    <Text className={styles.tx}>Offer: Buy premium and Get ₹ 100 Myntra voucher</Text>
                    <AiOutlineQuestionCircle/>
                </Flex>
                <Flex  className={styles.flexitems}>
                <AiOutlineCheck color="pink"/>
                    <Text className={styles.tx}>Watch on Mobile, TV, Laptop</Text>
                    <AiOutlineQuestionCircle/>
                </Flex>
                <Flex  className={styles.flexitems}>
                <AiOutlineCheck color="pink"/>
                    <Text className={styles.tx}>Eduaurra Competitive Exams Learning</Text>
                    <AiOutlineQuestionCircle/>
                </Flex>
            </Stack>

            <Stack>
                <Stack>
                <Stack className={styles.yearoffrUpprbx}>
                    <Flex >
                        <Box className={styles.tglmtoffr}>
                            LIMITED PERIOD OFFER
                        </Box>
                        <Box className={styles.tgperoffr}>
                            SAVE 30%
                        </Box>
                    </Flex>
                    <Flex>
                        <Stack>
                            <Text>12 months plan</Text>
                            <Text>Effective price ₹58/month</Text>
                            
                        </Stack>
                        <Flex>
                                <Text>₹ 999</Text>
                                <Text>₹ 699</Text>
                                <AiFillCheckCircle color="green"/>
                                </Flex>
                    </Flex>
                </Stack>
                <Flex><BsDisplay/></Flex>
                </Stack>

                <Stack>
                    
                </Stack>
                
            </Stack>

        </Flex>
        </>
    )
}

export default BuyPlans;



