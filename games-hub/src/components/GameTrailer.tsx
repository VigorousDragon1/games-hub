import { Spinner, Text, VStack } from "@chakra-ui/react";
import useTrailer from "@/hooks/useTrailer";

interface Props {
  gameId: number;
}

function GameTrailer({ gameId }: Props) {
  const { data, error, isLoading } = useTrailer(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  if (!data || data.length === 0) {
    return <Text>No trailers available</Text>;
  }

  const firstTrailer = data[0];

  return (
    <VStack align="stretch">
      <video
        src={firstTrailer.data["480"]}
        poster={firstTrailer.preview}
        controls
        width="100%"
      />
      <Text fontSize="sm" mt={2}>
        {firstTrailer.name}
      </Text>
    </VStack>
  );
}

export default GameTrailer;
