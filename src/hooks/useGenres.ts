import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Genre{
    id:number;
    name:string;
}
interface FetchGenresResponce{
    count:number;
    results:Genre[]
}
const useGenres = () => {
   const [genres, setGenre] = useState<Genre[]>([]);
        const [error, setError] = useState("");
        const [isLoading,setisLoading]=useState(false)
        useEffect(() => {
          const controller=new AbortController()
          setisLoading(true);
          apiClient
            .get<FetchGenresResponce>("/genres",{signal:controller.signal})
            .then((res) => {setGenre(res.data.results),setisLoading(false)})
            .catch((err) =>{if (err instanceof CanceledError) return;
               setError(err.message),setisLoading(false)});
            return ()=>controller.abort()
        },[]);
    return {genres,error,isLoading}
}

export default useGenres