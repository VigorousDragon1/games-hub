import useGames from "@/hooks/useGames";
// import apiClient from "@/services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import Loader from "./Loader";
import type { Genre } from "@/hooks/useGenres";
import type Platform from "@/hooks/usePlatforms";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  selectedOrder:string
}

function GameGrid({ selectedGenre,selectedPlatform,selectedOrder }: Props) {
  const { games, error, loading } = useGames(selectedGenre, selectedPlatform,selectedOrder);

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

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
