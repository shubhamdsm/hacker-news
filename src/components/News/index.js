import { useContext } from 'react'
import { Box, Center, Flex, Link,Text,Button } from '@chakra-ui/react'
import { AppContext } from '../../context'
import { Spinner } from "@chakra-ui/react"
const News = () => {
  const { loading,news, removeNews } = useContext(AppContext);

    if(loading){
      return <Center mt={10}>
        <Spinner/>
      </Center>
    }
    return(
        <Flex direction='column'>
        {news.map((item) => {
          const { objectID, title, num_comments, url, points, author } = item
          return(
            <Box key={objectID} mt={5} p={4}  w="100%" _hover={{ boxShadow: "dark-lg" }} boxShadow="lg" transition='all 0.5s ease-in-out'  rounded="md" >
                 <h4>{title}/</h4>
                 <p className='info'>
              {points} points by <span> {author} |</span> {num_comments}{' '}
              comments
            </p>
             <Flex justify='space-between'>
               <Text mt={3}>
                <Link color="blue.500" href={url} target='_blank'>
                  Read More
                </Link>

                </Text>
                <Text>
                 <Button color="red.500"  onClick={()=> removeNews(objectID)}>
                 Remove
                 </Button>
                </Text>
             </Flex>
      </Box>
          )
        })}
       
     
      </Flex>
    )
}
export default News