import apiClient, { type FetchResponse } from "@/services/api-client";


import useGameQueryStore from "@/store";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface publisher{
  id:number;
  name:string;
}
export interface Games {
  id: number;
  name: string;
  slug:string ;
  genres:Genre[];
  publishers:publisher[];
  
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  description_raw:string 
}



const useGames = () => {
  const gameQuery=useGameQueryStore(s=>s.gameQuery)

 return useInfiniteQuery<FetchResponse<Games>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: async ({pageParam = 1}) => {
      const response = await apiClient.get<FetchResponse<Games>>("/games", {
        params: {
          ...(gameQuery.genreId ? { genres: gameQuery.genreId } : {}),
          ...(gameQuery.platformId ? { platforms: gameQuery.platformId } : {}),
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
