import { Box, Image, Select, Text } from "@chakra-ui/react";


function Footer(){
    return <Box textAlign="left" bg="#FAF1ED" p="30px 0px">
        <Box w="85%" m="auto" display="flex" justifyContent="space-between" textAlign="left">
            <Box display="grid" gap="50px" gridTemplateColumns="repeat(3, 1fr)">
                <Box>
                    <Text fontSize='md'>About Tripadvisor</Text>
                    <Text color="black" fontWeight="500" fontSize='sm'>About Us</Text>
                    <Text color="black" fontWeight="500" fontSize='sm'>Press</Text>
                    <Text color="black" fontWeight="500" fontSize='sm'>Resources and Policies</Text>
                    <Text color="black" fontWeight="500" fontSize='sm'>Careers</Text>
                    <Text color="black" fontWeight="500" fontSize='sm'>Trust & Safety</Text>
                    <Text color="black" fontWeight="500" fontSize='sm'>Contact Us</Text>
                    <Text color="black" fontWeight="500" fontSize='sm'>Accessibility Statement</Text>
                </Box>
                <Box>
                    <Text fontSize='md'>Explore</Text>
                    <Text color="black" fontWeight="500" fontSize='sm'>Write a review</Text>
                    <Text color="black" fontWeight="500" fontSize='sm'>Add a Place</Text>
                    <Text color="black" fontWeight="500" fontSize='sm'>Join</Text>
                    <Text color="black" fontWeight="500" fontSize='sm'>Travellers' Choice</Text>
                    <Text color="black" fontWeight="500" fontSize='sm'>GreenLeaders</Text>
                    <Text color="black" fontWeight="500" fontSize='sm'>Help Center</Text>
                    <Text color="black" fontWeight="500" fontSize='sm'>Travel Articles</Text>
                </Box>
                <Box>
                    <Text fontSize='md'>Do Business With Us</Text>
                    <Text color="black" fontWeight="500" fontSize='sm'>Owners & DMO/CVB</Text>
                    <Text color="black" fontWeight="500" fontSize='sm'>Business Advantage</Text>
                    <Text color="black" fontWeight="500" fontSize='sm'>Sponsored Placements</Text>
                    <Text color="black" fontWeight="500" fontSize='sm'>Access our Content API</Text>
                    <Text fontSize='md'>Get The App</Text>
                    <Text color="black" fontWeight="500" fontSize='sm'>iPhone App</Text>
                    <Text _hover={{ textDecoration: 'none' }} color="black" fontWeight="500" fontSize='sm'>Android App</Text>
                </Box>
            </Box>
            <Box mr="80px">
                <Text fontSize='md'>Tripadvisor Sites</Text>
                <Text fontSize='sm'>Book tours and attraction tickets on <b _hover={{ textDecoration: 'underline' }}>Viator</b></Text>
            </Box>
        </Box>
        <Box w="85%" m="auto" display="flex" mt="20px">
            <Box w="70%">
                <Box display="flex" gap="15px">
                    <Box>
                        <Image boxSize="40px" src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg" alt="logo" />
                    </Box>
                    <Box>
                        <Text fontSize='xs'>© 2022 Tripadvisor LLC All rights reserved.</Text>
                        <Box display="flex" gap="20px">
                            <Text fontWeight="500" textDecoration="underline" fontSize='md'>Terms of Use</Text>
                            <Text fontWeight="500" textDecoration="underline" fontSize='md'>Privacy and Cookies Statement</Text>
                            <Text fontWeight="500" textDecoration="underline" fontSize='md'>Cookie consent</Text>
                            <Text fontWeight="500" textDecoration="underline" fontSize='md'>Site Map</Text>
                        </Box>
                        <Box display="flex" gap="20px">
                            <Text fontWeight="500" textDecoration="underline" fontSize='md'>How the site works</Text>
                            <Text fontWeight="500" textDecoration="underline" fontSize='md'>Contact us</Text>
                        </Box>
                    </Box>
                </Box>
                <Text fontSize='xs'>This is the version of our website addressed to speakers of English in India.
                 If you are a resident of another country or region, please select the appropriate version of Tripadvisor
                  for your country or region in the drop-down menu. more</Text>
            </Box>
            <Box w="30%">
                <Box display="flex" gap="15px">
                    <Select boxShadow='md' rounded="15px" bg="white" fontWeight="bold" color="black" variant='outline' placeholder='₹ INR' />
                    <Select boxShadow='md' rounded="15px" bg="white" fontWeight="bold" color="black" variant='outline' placeholder='India' />
                </Box>
                <Box display="flex" gap="25px" mt="20px" ml="180px">
                    <Image boxSize="20px" src="data:image/png;base64,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" alt="Facebook" />
                    <Image boxSize="20px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAAAD////m5ub09PT39/f8/Pyjo6PFxcXQ0NDp6enc3NyJiYnIyMi4uLiQkJC+vr5wcHCtra1eXl6ZmZl7e3szMzPOzs5SUlI/Pz9ubm7W1tZXV1dFRUWlpaVLS0sfHx8VFRUnJycODg43NzeCgoIrKysSEhJlZWUbGxuVlZVOGoSaAAAJYElEQVR4nO2d53bqOhBG5UJxw5gSMC1AyEny/i94bEjABklWGxUW35+7TsI13pGtKRqNkPfsQqZvAFwvQvf1InRfL0L39SJ0Xy9C9/UidF+WEkZ5se2PZrNRvyhyX+pS1hGG8XQ8R3f6GE/jUPCCdhH626/3e7o/HcpCaDBtIswnJLo/rQf8V7WGMEi68C5KIs4LW0Lon9j4BBitIAw4+GqdAo6L20CYHfkAK2XdVx3Gl/+aJ4x33HyVFvR5NZhWn9mch9o4YSHCV6sgXzP+ferH9T9ME45FAX/vH6P0ZnTqf5ol9D/FAStPBzOp+qPGSz2vf2KUcCXDV+utfb2oaL/T5wfZJGEqC4hQw8eJ+4u7Xy7PPzdImMsD/iGGgwTzvKctwqxcbpKVc4AI5VFx2mN/8zsTXQhXh8sPv0RDFH4N1QBSFDYIb2/8nMcfkpEPDvj3il5Mxk2fehCDPTTg6e+rasKWW6EHsTMSlNXu+lU14bL1u7mGd7EPDfjv5gxUhMHdbz/AEaUtfafi25chjOEFn274oyVOpY0vqwgf0wfvvJkCPo2gAfPmt1WE68ePHGPS3SkQuKFoAVaE4UN2shage/OlFbAiJPxJc/ztyUuBv03Tv/uxQcSJbQtEKJS0YNbylt0IV6P1OqsIM9KHT5TbFBespbjG/X5eXnztAnlT4scXPQDC+yBOqS4puCg73dYGDsij5CoPcqs+OEEOYRmFfjZ6cAi9Ge1/Uj7fcOZ+ebQvl5ifzjoIUaIWMDzA0BH1HSCvpH9ko9SFG+jhusmv5tIuA3xMu2+cWR1/TuV6q+1hd05WndkINUA1Vc+tXe/hWXNVbip8cqalvncmZJrdpmoIybYXQpebRoyxzE6JaYT12O70Oyo0n6atHwWEoESE+0Xsy1uHoSwgfPbiput7RY4tMJpJ2kaik69e/euXEuNDrP71KfffLX0TTWMVnBTjkzQXqGi5Cjq6v+ouE4XJ09C0EzeOXH9LcX237hAJuPtjUUZiRZdSLduZQiT0/pdCjL1v9TiPmt3F7RVhLHKdUsADCMAzwQhTolGvW4iVC3xxJxwjxTAYfT8+XDWhaA56wZkBgF8zRJgnqyZ8E77g55ZnFUcDIWY54n6FlFsluy+n4SkljKFMYVKlzynjQk64V4NBEWaOPxNKB6aTjAkS3h5iZr9LLcZG/tqLrPuVhE+0YV6ZC6Eap3+x9elZ8g8lX0PT2+OXXghDVc/P/JRSnld4z5s4hph1YGEdd8mA4PCAFyiQ38OHagVZfY+L4eMTq6jQiyLSXAr0530vf/IoaExA8CafZA9rgcVun+txUgxXsR/04DNRNEL4FYXvT9zakFqRvLaztKUYIIWxyTdCDV4jvKiE+le+1OuI8TiaVdAKjaIhzTsIebNu9mn3CNgmjPQkw+D01UWoIwoH1ayT0HXEUTehF/8zfZcywu32ethREutIakIJEx5i9sxEmlYXIISL2mrCYFqnFxbT4a9HwFC7YKlw0XdF+HZ7LhdJ6gdC21atEHYnBXpItB0W4x+59KIxLTCAHurtTd+XOmF3lSLhfbgWClvWjJz3RRvCVuAh3eWQkMKu2yIt67J6hIsOK0KthViwWuIAPfRj+r7UCV/PjDQXREIK3ywD9Uzflzrh1xJYaoRdERawIgTeh6RPaxJhz+FoqSVCHXM1tM8ymxLqe9CTJLsRNt/9S+hwxNvUBA94JnyOQSRtJzhPsU8xiKQyuzPhMwziO6kG/WImn2A6xSX0G4RPYBOJdZK/ro77/jdxo8SfM+f6ZIOPDZuEGiqyQEXeCHIldHzViVx2fgs5NG7ZUa8NEbC5MgPecgRQlN1KzbDR4ViYUhDZCoydLRoiBL+PhM4iUjp93q+QOprjp1WZ36dvnLT8RJ8UR6h5u7Ua4ZbvyYQaCnlV60gDxHX39F1z4Ohbd7FpVMAWKxCi77/GJ4qHUv19NaukApJ60PYcmnA6tpYRu+wGrvhw2AIMFkLPi92wjV3bPKmdkiMHqobfOwC7ekH3ctDuYwrU2Tivu9t1kE1srtfo7CnH1s97oLu/E7O6WwN1EvZW2XhpbUnKsbvbCpEw6s8mi43Nz2cthu5OJEIHZtFKe4aGOQRCN0whU4MuPKHOdkcyYmnOiSd0xGOjpWc6CN2IED9YAJ0mZGvohCd0YqIhlSYwETox0zD2OSJYCwemGtwuLg7CwP7tT6xtnEk+jfU5Reb+RkS/1Npo4iLGaYZGqLqPhGKxtxojR09W151ydIylxIcW76YhV15wEVqc+uZph0eN8cFP9BEUV49RehbDzmKwrhwwD2Fo5Y4apWfJ9ix8UBlOWeUgtNDykw7nFCa0bUZlC3u5CC2zi9x9U1ly3pFF8w3nS8hIaFGBBmtQyE3oxfBNrFjEZwm5CD0vs8D6C53NyH6WbM/8jCN0PgPXabl9sz2IxI6D4TwPeDg2t9AmeEwa94nHQWaoRBPXPwiE0KuPbNvqpxSwE+KEZ0V5cZrsNrqKpzoKnyAIL/I1uTsihlAJ4VYPH1pKHG8rQxjqCh5lAGUIU129ljZS5zAKE/a07VmUAxQmTLW5qRvJI6bFCCN99nAte1SoECF8X+6reLMySgjfNK7yKzhCk5twpXNbjdwBWkKEK63lpvxJGVnCodb88F76JDtewlTvtq+NoiPsWQmD6V4rn4JJlIewl2qPB1XMMcyE8VR7Edi7mleQifDtZGCD0ETSUWMmDHMzpVFMRZWyhEFczAyluZeqDh8mEvrDQbI2lxhVfNT57ZyZKB6meZGsP822EFZ2enSTMLGoLbKio6PbhBb1ilioH8Ca0J4RVOJnYwhtOfAhkY3liYS6Up50lYrcbByhV5gfxR21ZYA0ofGlzw+xdUEOwkqFud3pG1i+m09TmFmm30HzNbw2Ezt+x9xHCssQetq3pycilRVyhFW81Nf1sC4LKPtHJ6yUaogJDwmIf8ZIeN6eDspXprqGj0RYKSwUnJ+L1STTikckrOQXX6qdnfk4VZmAYRQtTxMME3WZjPVoZQDP6861RcVsL023mWIOltUlloxwMJguBFsP7JdlAelWM4g1q9+L81G54xnOj8ksW+kx6lTxra4FUdpPxjvqgH4vy9F20DoH2KhEKxWiYV4Uxbb/k8zGs9No2t8WRTZYwQWywpKs+nJAL0L39SJ0Xy9C9/UidF8vQvf1InRfz0/4Hw0GlRcIaK93AAAAAElFTkSuQmCC" alt="twitter" />
                    <Image boxSize="20px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMsApy0DCJrwgxkz2rKyyHf7WM6aLm63Obw&usqp=CAU" alt="Pinterest" />
                    <Image boxSize="20px" src="data:image/png;base64,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" alt="Instagram" />
                </Box>
            </Box>
        </Box>
    </Box>
}

export default Footer;