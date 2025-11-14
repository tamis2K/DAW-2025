import { useEffect, useState, type ReactNode } from "react"
import type { MovieDTO } from "../services/movie.service"

type MovieGenresProps = {
    movie: MovieDTO;
    children: ReactNode
}

export function MovieGenres({
    movie, 
    children
    
} : MovieGenresProps) {

    const [genres, setGenres] = useState<string[]>([]);

    useEffect(() => {

        if (movie) {
            setGenres(movie.genres.split("|"));
        }

    }, [movie])
    return (
        <div className="text-sm my-2.5">
              {genres.map((genres, index) => (
                <span key={index} className="bg-white/20 px-3 py-1 rounded-full mr-2">{genres}</span>
              ))}
            {children}

        </div>
    )

}