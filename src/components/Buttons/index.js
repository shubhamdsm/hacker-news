import React, { useContext } from 'react';
import { Button, Center, Flex, Spacer } from "@chakra-ui/react"

import { AppContext } from "../../context"
const Buttons = () => {
    const { loading,page,nbPages, handlePage } = useContext(AppContext)
    return(
        <Flex direction='row' mt={5}>
        
            <Button disabled={loading}  colorScheme='teal' onClick={() => handlePage('prev')}>Previous</Button>
            <Spacer/>
            <Center> {page + 1} of {nbPages} </Center>
            <Spacer/>
            <Button disabled={loading} colorScheme='teal' onClick={() => handlePage('next')}>Next</Button>
       
        </Flex>
    )
}
export default Buttons