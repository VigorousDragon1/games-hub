import apiClient, { type FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
export interface Genre {
  id: number;
  name: string;
  image_background:string
}
const useGenre = () => {

 return useQuery<FetchResponse<Genre>>({
 queryKey:['genre' ],
 queryFn:()=>
  apiClient.get<FetchResponse<Genre>>('/genres').then((res)=>res.data)
  })

 
 
};

export default useGenre;
