import apiClient, { type FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>>({
    queryKey:['platform'],
    queryFn:()=>
      apiClient.get<FetchResponse<Platform>>('/platforms').then((res)=>res.data)
  })


};
export default usePlatforms
