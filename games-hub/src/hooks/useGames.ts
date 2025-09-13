import apiClient, { type FetchResponse } from "@/services/api-client";


import type { gameQuery } from "@/App";
import { useInfiniteQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}



const useGames = (gameQuery: gameQuery) => {
 return useInfiniteQuery<FetchResponse<Games>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: async ({pageParam = 1}) => {
      const response = await apiClient.get<FetchResponse<Games>>("/games", {
        params: {
          ...(gameQuery.genre ? { genres: gameQuery.genre.id } : {}),
          ...(gameQuery.platform ? { platforms: gameQuery.platform.id } : {}),
          ...(gameQuery.sortOrder ? { ordering: gameQuery.sortOrder } : {}),
          ...(gameQuery.searchText ? { search: gameQuery.searchText } : {}),
          page:pageParam
        },
      });
      return response.data
    },
    getNextPageParam:(lastPage,allPages)=>
      lastPage.next?allPages.length+1:undefined,
    initialPageParam:1
  });
};

export default useGames;
