import type { Games } from "@/hooks/useGames"
import { SimpleGrid,Text } from "@chakra-ui/react"
import CriticScore from "./CriticScore"
import GameAttributes from "./GameAttributes"

interface Props{
    game:Games
}

function GameAttributesHolder({game}:Props) {
  return (
       <SimpleGrid columns={2}  as={"dl"}>
            <GameAttributes term="Platforms">{game.parent_platforms?.map(p => <Text key={p.platform.id}>{p.platform.name}</Text>)}</GameAttributes>
            <GameAttributes term="Metacritics"><CriticScore score={game.metacritic} /></GameAttributes>
            <GameAttributes term="Genres">{game.genres.map(g => <Text key={g.id}>{g.name}</Text>)}</GameAttributes>
            <GameAttributes term="Publishers">{game.publishers.map(p=><Text key={p.id}>{p.name}</Text>)}</GameAttributes>
            </SimpleGrid>
  )
}

export default GameAttributesHolder