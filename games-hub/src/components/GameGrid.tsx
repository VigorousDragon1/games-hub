import useGames from "@/hooks/useGames";
// import apiClient from "@/services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import Loader from "./Loader";
import type { Genre } from "@/hooks/useGenres";


interface Props{
  selectedGenre:Genre|null
}

function GameGrid({selectedGenre}:Props) {
  const { games, error, loading } = useGames(selectedGenre);

  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spaceX={10}>
        {loading && skeleton.map((sk) => <Loader key={sk} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
