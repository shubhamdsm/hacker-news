import { Button, Center, Flex, Spacer } from "@chakra-ui/react"

const Buttons = () => {
    return(
        <Flex direction='row' mt={5}>
        
            <Button colorScheme='teal'>Previous</Button>
            <Spacer/>
            <Center>0 out of 50</Center>
            <Spacer/>
            <Button colorScheme='teal'>Next</Button>
       
        </Flex>
    )
}
export default Buttons