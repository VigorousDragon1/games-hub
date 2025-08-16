import type { Genre } from "@/hooks/useGenres"
import type Platform from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react"

interface Props{
    selectedGenre:Genre|null;
    selectedPlatform:Platform|null;

}

function GameHeading({selectedGenre,selectedPlatform}:Props) {
    const heading = `${selectedPlatform?.name||''} ${selectedGenre?.name||''} Games`
  return (
<Heading as={"h1"}>{heading}</Heading>
  )
}

export default GameHeading