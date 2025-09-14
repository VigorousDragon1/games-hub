import useGameQueryStore from "@/store";
import {  Input,  InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";



function SearchInput() {
  const setSearchText=useGameQueryStore(s=>s.setSearchText)
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "90%" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current) setSearchText(searchRef.current.value);
      }}
    >
      <InputGroup endElement={<BsSearch />}>
        <Input ref={searchRef} placeholder="Searh Games..."></Input>
      </InputGroup>
    </form>
  );
}

export default SearchInput;
