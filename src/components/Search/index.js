import { Input, Heading, Center, Switch, Flex, FormControl, useColorMode } from '@chakra-ui/react'
const Search = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === "dark";
    return(
        <Flex direction='column'>
        <Center>
            <Heading m={3}>Hacker News</Heading>
            <Switch
                    m="1rem"
                    isChecked={isDark}
                    onChange={toggleColorMode}
                    pr={2}
                />
        </Center>
        <FormControl>    
            <Input placeholder='Search News'/>
        </FormControl>
        </Flex>
    )
}
export default Search