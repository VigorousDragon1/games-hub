import { HStack, List, ListItem,Image,Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

{
}
function GenreList() {
  const { genres,loading,error } = useGenres();
 if(error) return null
  if(loading) return <Spinner padding={"5px"} margin={"10px"}/>
  return (
    
    <List.Root mt={"20px"}>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <HStack p={"10px"}>
            <Image boxSize={"32px"} borderRadius={"5px"} src={(genre.image_background)}/>
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
}

export default GenreList;
