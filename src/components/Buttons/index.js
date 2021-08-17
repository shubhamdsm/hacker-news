import { Button, Center, Flex, Spacer, Text } from "@chakra-ui/react"

const Buttons = () => {
    return(
        <Flex direction='row' mt={5}>
        
            <Button>Previous</Button>
            <Spacer/>
            <Center>0 out of 50</Center>
            <Spacer/>
            <Button>Next</Button>
       
        </Flex>
    )
}
export default Buttons