import React from 'react';

//import components
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

const Home = () => {
  return(
    <>
    <HeroImage/>
    <SearchBar/>
    <Grid>
      <MovieThumb/>
    </Grid>
    <LoadMoreBtn/>
    <Spinner/>
  </>
  )
}

export default Home;