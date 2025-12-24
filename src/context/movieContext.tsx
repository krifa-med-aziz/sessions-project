import { createContext, useContext, useState } from "react";
import type { TMovie } from "../types/movieTypes";

type TWatchlistProps = {
  watchlist: TMovie[];
  addToWatchlist: (movie: TMovie) => void;
};

const MovieContext = createContext<TWatchlistProps | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useWatchlist = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useWatchlist must be used within a WatchlistProvider");
  }
  return context;
};

export const MovieContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [watchlist, setWatchlist] = useState<TMovie[]>([]);
  const addToWatchlist = (movie: TMovie) => {
    if (!watchlist?.find((m) => movie.imdbID === m.imdbID)) {
      setWatchlist([...watchlist, movie]);
    }
  };
  return (
    <MovieContext.Provider
      value={{
        watchlist,
        addToWatchlist,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
