import useGameDetails from "@/hooks/useGameDetail"
import { Heading, Spinner } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import ExpandableComponent from "../ExpandableComponent"
import GameAttributesHolder from "../GameAttributesHolder"
import GameTrailer from "../GameTrailer"


function GameDetailPage() {
    const { slug } = useParams()
    const { data: game, isLoading, error } = useGameDetails(slug!)
    if (isLoading) return <Spinner />
    if (error || !game) throw error
    return (
        <>
            <Heading>{game.name}</Heading>
            
            <ExpandableComponent>{game.description_raw}</ExpandableComponent>
         <GameAttributesHolder game={game}/>
           <GameTrailer gameId={game.id}></GameTrailer>
        </>
    )
}

export default GameDetailPage