import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import type { Genre } from "./useGenres";


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
  metacritic: number

}

interface FetchGamesRes {
  count: number;
  results: Games[];
}

const useGames = (selectedGenre?:Genre|null , selectedPlatform?:Platform|null,selectedOrder?:string,searchText?:string) => {
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
        ...(selectedGenre ? { genres: selectedGenre.id } : {}),
        ...(selectedPlatform ? { platforms: selectedPlatform.id } : {}),
        ...(selectedOrder ? { ordering: selectedOrder } : {}), 
       ...(searchText ? { search: searchText } : {})
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
}, [selectedGenre, selectedPlatform,selectedOrder,searchText]);

return { games, error, loading };
}

export default useGames