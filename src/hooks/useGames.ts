import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface platform{
    id:number;
    name:string;
    slug:string;
    metacritic:number;
}

export interface Game {
  metacritic: number;
  background_image: string ;
  id: number;
  name: string;
  parent_platforms:{platform:platform}[]
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
     const [games, setgames] = useState<Game[]>([]);
      const [error, setError] = useState("");
      const [isLoading,setisLoading]=useState(false)
      useEffect(() => {
        const controller=new AbortController()
        setisLoading(true);
        apiClient
          .get<FetchGamesResponse>("/games",{signal:controller.signal})
          .then((res) => {setgames(res.data.results),setisLoading(false)})
          .catch((err) =>{if (err instanceof CanceledError) return;
             setError(err.message),setisLoading(false)});
          return ()=>controller.abort()
      },[]);
  return {games,error,isLoading}
}

export default useGames