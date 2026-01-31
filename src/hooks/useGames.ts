import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";

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


const useGames = (selectedGenre: Genre | null) => useData<Game>('/games',{params:{genres:selectedGenre?.id}},[])

export default useGames