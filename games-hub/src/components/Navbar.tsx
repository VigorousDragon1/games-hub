import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/image.png";
import SearchInput from "./SearchInput";
interface Props{
    onSearch:(searchText:string)=>void
    
}
function Navbar({onSearch}:Props) {
  return (
    <HStack  >
      <Image src={logo} boxSize="60px" />
      
      <SearchInput  onSearch={onSearch}   ></SearchInput>
    </HStack>
  );
}

export default Navbar;
