import { Box, Image, Heading, HStack, Card } from "@chakra-ui/react";
import type { Games } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
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
      boxSize={"300px"}
      ml={10}
     
      // width={"300px"}
    >
      <Image
        objectFit={"cover"}
        src={game.background_image}
        alt={game.name}
        width="100%"
        height="200px"
      />
      <Box p="4">
        <HStack justifyContent={"space-between"}>
          {
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          }

          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading mt={1} size="md">
         <Link to={'/games/' + game.slug}>{game.name}</Link> 
           <Emoji rating={game.rating_top} />{" "}
        </Heading>
      </Box>
    </Card.Root>
  );
}

export default GameCard;
