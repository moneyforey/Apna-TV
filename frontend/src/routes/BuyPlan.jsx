import { Box, Button, Flex, Heading, Input, Select, Stack, Text } from "@chakra-ui/react";

import styles from "./BuyPlan.module.css";
import {AiFillCheckCircle, AiOutlineQuestionCircle, AiOutlineCheck } from "react-icons/ai";
import { BsDisplay } from "react-icons/bs";

const BuyPlans =()=>{
    return(
        <Box backgroundColor='black'>
        <Flex className={styles.mainflex}>
            <Stack className={styles.rstack}>
                <Text className={styles.hd}>Watch Ad-Free with Premium!</Text>
                <Flex className={styles.flexitemsouter}>
                    <Flex className={styles.flexitems}><AiOutlineCheck color="pink"/>
                    <Text className={styles.tx}>2800+ Blockbuster Movies</Text></Flex>
                    <AiOutlineQuestionCircle/>
                </Flex>
                <Flex  className={styles.flexitemsouter}>
                <Flex className={styles.flexitems}><AiOutlineCheck color="pink"/>
                    <Text className={styles.tx}>200+ Web Series</Text></Flex>
                    <AiOutlineQuestionCircle/>
                </Flex>
                <Flex  className={styles.flexitemsouter}>
                    <Flex className={styles.flexitems}>
                    <AiOutlineCheck color="pink"/>
                    <Text className={styles.tx}>Live TV, Before TV and Downloads</Text>
                    </Flex>
                
                    <AiOutlineQuestionCircle/>
                </Flex>
                <Flex  className={styles.flexitemsouter}>
                    <Flex className={styles.flexitems}>
                    <AiOutlineCheck color="pink"/>
                    <Text className={styles.tx}>Offer: Buy premium and Get ₹ 100 Myntra voucher</Text>
                    </Flex>
                
                    <AiOutlineQuestionCircle/>
                </Flex>
                <Flex  className={styles.flexitemsouter}>
                <Flex className={styles.flexitems}>
                <AiOutlineCheck color="pink"/>
                    <Text className={styles.tx}>Watch on Mobile, TV, Laptop</Text>
                </Flex>
                    <AiOutlineQuestionCircle/>
                </Flex>
                <Flex  className={styles.flexitemsouter}>
                <Flex className={styles.flexitems}>
                <AiOutlineCheck color="pink"/>
                    <Text className={styles.tx}>Eduaurra Competitive Exams Learning</Text>
                </Flex>
                    <AiOutlineQuestionCircle/>
                </Flex>
            </Stack>

            <Stack className={styles.lstack}>
                <Stack className={styles.yearoffrUpprbx}>
                <Stack className={styles.yearoffrUpprbxinn}>
                    <Flex className={styles.tpflx}>
                        <Box padding='.5rem' className={styles.tglmtoffr}>
                            LIMITED PERIOD OFFER
                        </Box>
                        <Box padding='.5rem' className={styles.tgperoffr}>
                            SAVE 30%
                        </Box>
                    </Flex>
                    <Flex className={styles.out}>
                        <Stack>
                            <Text className={styles.plname}>12 months plan</Text>
                            <Text className={styles.eff}>Effective price ₹58/month</Text>
                            
                        </Stack>
                        <Flex>
                                <span className={styles.txtD}>₹ 999</span>
                                <Text className={styles.prc}>₹ 699</Text>
                                <AiFillCheckCircle color="green"/>
                                </Flex>
                    </Flex>
                </Stack>
                <Flex className={styles.moniter}><BsDisplay/> <Text>Watch on <span className={styles.bespn}>3 screens</span> at the same time</Text></Flex>
                </Stack>

               

                <Stack className={styles.yearoffrUpprbx}>
                <Stack >
                   
                    <Flex className={styles.out}>
                        <Stack>
                            <Text className={styles.plname}>3 months plan</Text>
                            <Text className={styles.eff}>Effective price ₹58/month</Text>
                            
                        </Stack>
                        <Flex>
                                
                                <Text className={styles.prc}>₹ 399</Text>
                                <AiFillCheckCircle color="green"/>
                               
                                </Flex>
                    </Flex>
                </Stack>
                <Flex className={styles.moniter}><BsDisplay/> <Text>Watch on <span className={styles.bespn}>3 screens</span> at the same time</Text></Flex>
                    
                </Stack>

                <Text>Have a Code ?</Text>


                <Button>CONTINUE WITH  ₹{'399'}</Button>
                
            </Stack>

        </Flex>
        </Box>
    )
}

export default BuyPlans;



