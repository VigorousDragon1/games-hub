import {  Input,  InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Props{
    onSearch:(searchText:string)=>void
    // searchText:string
}
function SearchInput({onSearch }:Props) {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "90%" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current) onSearch(searchRef.current.value);
      }}
    >
      <InputGroup endElement={<BsSearch />}>
        <Input ref={searchRef} placeholder="Searh Games..."></Input>
      </InputGroup>
    </form>
  );
}

export default SearchInput;
