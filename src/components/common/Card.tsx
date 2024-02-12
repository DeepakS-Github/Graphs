import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

const Card = ({ children }: { children: ReactNode }) => {
    return (
        <Box bgColor={"#252120"} position={"relative"} padding={"12px"} border={"1px solid #312d2b"} borderRadius={"lg"} display={"flex"} flexDir={"column"} gap={"6px"}>
            {children}
        </Box>
    )
}

export default Card