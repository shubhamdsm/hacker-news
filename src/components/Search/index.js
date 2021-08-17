import { Input, Heading, Center } from '@chakra-ui/react'
const Search = () => {
    return(
        <section>
        <Center>
            <Heading m={3}>Hacker News</Heading>
        </Center>    
            <Input placeholder='Search News'/>
        </section>
    )
}
export default Search