import { HStack, Image ,Text} from "@chakra-ui/react"
import logo from "../assets/image.png"
function Navbar() {
  return (
  <HStack>
    <Image src={logo} boxSize="60px"/>
    <Text>NavBar</Text>
  </HStack >
  )
}

export default Navbar