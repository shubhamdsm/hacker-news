import { Box, Flex, Link,Text } from '@chakra-ui/react'
const News = () => {

    return(
        <Flex direction='column'>
        <Box mt={5} p={4}  w="100%" _hover={{ boxShadow: "dark-lg" }} boxShadow="lg" transition='all 0.5s ease-in-out'  rounded="md" >
        This is the Box
        it contains a link
        This is the Box
        it contains a link
        This is the Box
        it contains a link
        <Flex justify='space-between'>
        <Text>
           <Link color="blue.500" href="#">
            Read More
            </Link>
        </Text>
        <Text>
            <Link color="red.500" href="#">
              Remove
           </Link>
        </Text>
        </Flex>
      </Box>
     
      </Flex>
    )
}
export default News