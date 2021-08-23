import { useContext } from 'react';
import { AppContext } from '../../context';
import { Input, Heading, Center, Switch, Flex, FormControl, useColorMode } from '@chakra-ui/react'
const Search = () => {
    const { search, handleSearch } = useContext(AppContext);
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
            <Input placeholder='Search News'value={search} onChange={(e) => handleSearch(e.target.value)}/>
        </FormControl>
        </Flex>
    )
}
export default Search