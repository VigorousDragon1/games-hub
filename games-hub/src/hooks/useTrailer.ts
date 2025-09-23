// useTrailer.ts
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

const useTrailer = (gameId: number) => {
  return useQuery<Trailer[], Error>({
    queryKey: ["trailers", gameId],
    queryFn: () =>
      apiClient
        .get<{ results: Trailer[] }>(`/games/${gameId}/movies`)
        .then((res) => res.data.results),
  });
};

export default useTrailer;
