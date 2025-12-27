import { useEffect, useState } from "react";

import MovieCard from "../components/Moviecard";
import { Movies } from "../data/data";
import type {TMovie} from "../types/movieTypes"

import SearchBar from "../components/SearchBar";



export default function Home() {

  const [search , setSearch] = useState<string>("");
  const [filteredMovies , setFilteredMovies] = useState<TMovie[]>(Movies)


  useEffect(() => {


    
    if (search.trim() === "") {
      setFilteredMovies(Movies)
    }
    
    const filtered = Movies.filter((movie) => movie.Title.toLowerCase().includes(search.toLowerCase()))


    setFilteredMovies(filtered);


  } , [search] )



  return (
    <div className="min-h-screen">
      <div className="bg-linear-to-b from-gray-900 to-[#141414] py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-6xl mb-6 tracking-tight">
            Find your next <span className="text-primary">favorite</span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Search through our extensive collection of movies and series. Create
            your personal watchlist and never miss a show.
          </p>
        </div>
        <SearchBar search = {search} setSearch = {setSearch}/>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">
            Results for Avengers
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
