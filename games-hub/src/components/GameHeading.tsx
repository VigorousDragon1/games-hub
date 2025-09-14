import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

function GameHeading() {
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);

  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genre = genres?.results.find((g) => g.id === genreId);
  const platform = platforms?.results.find((p) => p.id === platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" mt={4} ml={10} mb={4}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
