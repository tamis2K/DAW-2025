import type { MovieDTO } from "../services/movie.service";
import { createContext, useState } from "react";

type MovieContextProps = {
  selctedMovie: MovieDTO | null;
  setSelectedMovie: (movie: MovieDTO) => void;
};

const MovieCotext = createContext<MovieContextProps | undefined>(undefined);

export function MovieContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [selctedMovie, setSelectedMovie] = useState<MovieDTO | null>(null);

  return (
    <MovieCotext.Provider value={{ selctedMovie, setSelectedMovie }}>
      {children}
    </MovieCotext.Provider>
  );
}

export default MovieCotext;
