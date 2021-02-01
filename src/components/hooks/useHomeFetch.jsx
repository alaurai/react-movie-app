import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../../config/api';


export const useHomeFetch = () => {
  const [state,setState] = useState({ movies: []});
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint) =>{

    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search('page');

    try{
      const result = await ( await fetch(endpoint)).json();
      console.log(result);
      setState(prev => ({
        ...prev,
        movies: isLoadMore !== -1 
                ? [...prev.movies,...result.results]
                : [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPage: result.total_pages,
      }))
    }catch(error){
      setError(true);
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
  },[])

  return [{ state, loading, error }, fetchMovies];
}