import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Layout from '../defaultLayoult/Layout';
import axios from 'axios';
import MovieCard from './MovieCard';
const Series = () => {
  const [content, setContent] = useState([]);

  const FetchData = async()=>{
    // const api_key = import.meta.env.VITE_MOVIE_API_KEY
      const{data} =  await axios.get(`
     
https://api.themoviedb.org/3/discover/movie?api_key=4775edc64ad8431afd9086f7cbb07b45&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
      setContent(data.results);
  }
  useEffect(() => {
  FetchData();
  }, [])

  return (
    <div>
      <Layout>
     <div className='flex flex-wrap w-full p-4 sm:ml-64  gap-3  justify-center items-center  mx-auto bg-[#212426] text-white'>
{
          content.map((c) => (
          <MovieCard   
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title || c.name}
         date={c.first_air_date}
          />
          )
          )
}
    </div>
   </Layout>
    </div>
  );
}

export default Series;
