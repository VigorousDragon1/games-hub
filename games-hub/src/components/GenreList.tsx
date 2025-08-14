import { HStack, List, ListItem, Image, Spinner, Link } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";

interface  Props{
  onClick:(genre:Genre)=>void
}

function GenreList({onClick}:Props) {
  const { genres, loading, error } = useGenres();
  if (error) return null;
  if (loading) return <Spinner padding={"5px"} margin={"10px"} />;
  return (
    <List.Root mt={"20px"}>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <HStack p={"10px"}>
            <Image
              boxSize={"32px"}
              borderRadius={"5px"}
              src={genre.image_background}
            />
            <Link
              onClick={() => onClick(genre)}
              variant={"underline"}
              border={"none"}
            >
              {genre.name}
            </Link>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
}

export default GenreList;
