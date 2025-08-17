import { Box, Image, Heading, HStack, Card } from "@chakra-ui/react";
import type { Games } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
interface Props {
  game: Games;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mb={4}
      boxSize={300}
      // width={"300px"}
    >
      <Image src={game.background_image} alt={game.name} />
      <Box p="4">
      

        <HStack justifyContent={"space-between"}>
          {
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          }

          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
          <Heading mt={1} size="md">{game.name }  <Emoji  rating={game.rating_top}  /> </Heading>
         

      </Box>
    </Card.Root>
  );
}

export default GameCard;
