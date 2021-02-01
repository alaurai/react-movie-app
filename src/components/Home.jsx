import React, { useState } from 'react';
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE, API_URL, API_KEY }  from '../config/api';

//import components
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

//custom hook
import { useHomeFetch } from './hooks/useHomeFetch';

import NoImage from '../assets/images/no_image.jpg';

const Home = () => {
 
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState('');

  const loadMoreMovies = () => {
    const searchEndpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${state.currentPage + 1}`;
    const popularEndpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${state.currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);
  }

  if(error) return <div>Something went wrong...</div>

  if(!state.movies[0]) return <Spinner/>
  
  return(
    <>
    <HeroImage 
      image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
      title={state.heroImage.original_title}
      text={state.heroImage.overview}  
    />
    <SearchBar/>
    <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {state.movies.map(movie => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      {loading && <Spinner/>}
      {state.currentPage < state.totalPages && !loading && ( 
        <LoadMoreBtn text="Load More" callback={loadMoreMovies}/>
      )}
  </>
  )
}

export default Home;