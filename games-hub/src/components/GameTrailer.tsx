import { useState } from "react";
import { Spinner, Text, HStack, VStack, Image, Button } from "@chakra-ui/react";
import useTrailer from "@/hooks/useTrailer";

interface Props {
  gameId: number;
}

function GameTrailer({ gameId }: Props) {
  const { data, error, isLoading } = useTrailer(gameId);
  const [selected, setSelected] = useState<number>(0); // index of selected trailer

  if (isLoading) return <Spinner />;
  if (error) throw error;

  if (!data || data.length === 0) {
    return <Text>No trailers available</Text>;
  }

  const activeTrailer = data[selected];

  return (
    <VStack align="stretch" spacing={4}>
      {/* Active trailer player */}
      <video
        src={activeTrailer.data["480"]}
        poster={activeTrailer.preview}
        controls
        width="100%"
      />

      {/* Trailer selector thumbnails */}
      <HStack spacing={4} overflowX="auto">
        {data.map((trailer, index) => (
          <VStack
            key={trailer.id}
            spacing={1}
            cursor="pointer"
            onClick={() => setSelected(index)}
          >
            <Image
              src={trailer.preview}
              alt={trailer.name}
              boxSize="120px"
              objectFit="cover"
              border={index === selected ? "2px solid #3182CE" : "2px solid transparent"}
              borderRadius="md"
            />
            <Text fontSize="sm" noOfLines={1} maxW="120px">
              {trailer.name}
            </Text>
          </VStack>
        ))}
      </HStack>
    </VStack>
  );
}

export default GameTrailer;
