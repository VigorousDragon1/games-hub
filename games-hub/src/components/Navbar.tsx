import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/image.png";
import SearchInput from "./SearchInput";




function Navbar() {
  return (
    <HStack ml={5} mt={3} >
      <Image src={logo} boxSize="60px" />
      
      <SearchInput   ></SearchInput>
    </HStack>
  );
}

export default Navbar;
