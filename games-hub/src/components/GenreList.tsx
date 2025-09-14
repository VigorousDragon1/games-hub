import { HStack, List, ListItem, Image, Spinner, Link, Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "@/store";



function GenreList() {
const selectedGenreId=useGameQueryStore(s=>s.gameQuery.genreId)
const setGenreId =useGameQueryStore(s=>s.setGenreId)
  const { data , isLoading ,error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner padding={"5px"} margin={"10px"} />;
  return (
    <>
    <Heading as={"h1"} margin={"15px"}>Genres</Heading>
    <List.Root mt={"20px"} >
      {data?.results.map((genre) => (
        <ListItem key={genre.id}>
          <HStack p={"10px"}>
            <Image
              boxSize={"32px"}
              borderRadius={"5px"}
              src={genre.image_background}
            />
            <Link
            fontWeight={genre.id===selectedGenreId?'bold':'normal'}
              onClick={() => setGenreId(genre.id)}
              variant={"underline"}
              border={"none"}
            >
              {genre.name}
            </Link>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
    </>
  );
}

export default GenreList;
