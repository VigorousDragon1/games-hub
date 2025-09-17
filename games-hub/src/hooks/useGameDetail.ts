import { useQuery } from "@tanstack/react-query";
import ApIClient from '../services/singleApiClient'
import type { Games } from "./useGames";

const apiclient= ApIClient<Games>('/games')

const useGameDetails=(slug:string)=>useQuery({
    queryKey:['games' , slug],
    queryFn:()=>apiclient.get(slug)
})

export default useGameDetails