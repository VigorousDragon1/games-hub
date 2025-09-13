import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

import type { gameQuery } from "@/App";


export interface Platform {
  id: number;
  name: string;
  slug: string
}
export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[],
  metacritic: number;
  rating_top:number

}

interface FetchGamesRes {
  count: number;
  results: Games[];
}

const useGames = (gameQuery:gameQuery) => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)

 useEffect(() => {
  const controller = new AbortController();
  setLoading(true);

  apiClient
    .get<FetchGamesRes>("/games", {
      signal: controller.signal,
      params: {
        ...(gameQuery.genre ? { genres: gameQuery.genre.id } : {}),
        ...(gameQuery.platform? { platforms: gameQuery.platform.id } : {}),
        ...(gameQuery.sortOrder ? { ordering: gameQuery.sortOrder } : {}), 
       ...(gameQuery.searchText? { search: gameQuery.searchText } : {})
      }
    })
    .then((res) => {
      setGames(res.data.results);
      setLoading(false);
    })
    .catch((err) => {
      if (err instanceof CanceledError) return;
      setError(err.message);
      setLoading(false);
    });

  return () => controller.abort();
}, [gameQuery]);

return { games, error, loading };
}

export default useGames