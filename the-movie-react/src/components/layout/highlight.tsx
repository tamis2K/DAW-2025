import { useEffect, useState } from "react";
import { useMovies } from "../../cases/movies/hooks/use-hook";
import { MovieGenres } from "../../cases/movies/components/movie-genres";

export function Highlight() {
  const { selctedMovie } = useMovies();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(!selctedMovie);
  }, [selctedMovie]);

  return isLoading ? (
    <div className="flex justify-center items-center ">
      <p className="text-2xl text-center text-white">Carregando...</p>
    </div>
  ) : (
    <section
      className="relative min-h-[50vh] flex items-center"
      style={{
        backgroundImage: `url(${selctedMovie.highlight})`,
      }}
    >
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(17,17,17,1) 20%, rgba(17,17,17,0.7) 50%, rgba(17,17,17,0.7) 100%)",
        }}
      />

      <div className="relative z-20 flex gap-8 py-8 px-48 container mx-auto items-start">
        <img className="rounded-lg" src={selctedMovie.image} alt="Capa filme" />

        <div className="flex flex-col">
          <h2 className="font-normal text-5xl pb-2"> {selctedMovie.title}</h2>

          <MovieGenres movie={selctedMovie}>
              <span className="pl-4 text-gray-300">
                {selctedMovie.duration.replace(':', 'h') + 'm'}
              </span>
          </MovieGenres>

          

          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-normal pt-16 pb-2">Sinopse</h4>
            <p className="text-gray-400 text-sm max-w-3xl leading-relaxed">
              {selctedMovie.sinopse}
            </p>
            {JSON.stringify(selctedMovie)}
          </div>

          <div className="flex gap-4 my-6">
            <button className="bg-[#e50914] text-white font-bold px-6 py-3 rounded transition-colors duration-300 hover:bg-[#b8070f]">
              Assistir
            </button>
            <button className="bg-white/20 text-white border border-white/30 px-6 py-3 rounded transition-colors duration-300 hover:bg-white/30">
              Detalhes
            </button>
            <button className="bg-white/20 text-white border border-white/30 px-6 py-3 rounded transition-colors duration-300 hover:bg-white/30">
              + Adicionar à lista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
