import { Box, Image, Heading, HStack } from "@chakra-ui/react";
import type { Games } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
interface Props {
  game: Games;
}

function GameCard({ game }: Props) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mb={4}
      boxSize={300}
    >
      <Image src={game.background_image} alt={game.name} />
      <Box p="4">
        <Heading size="md">{game.name}</Heading>

        <HStack justifyContent={'space-between'}>
            {
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        }

           <CriticScore score={game.metacritic}></CriticScore>
        </HStack>

      
      </Box>
   
    </Box>
  );
}

export default GameCard;
