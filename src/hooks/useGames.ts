import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

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


const useGames = () => useData<Game>('/games')

export default useGames