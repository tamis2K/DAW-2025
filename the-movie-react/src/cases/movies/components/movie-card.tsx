import type { MovieDTO } from "../services/movei.service"

type MovieCardProps = {
    movie: MovieDTO
}

export function MovieCard({
    movie
}: MovieCardProps) {
    return (
        <div className="bg-[#222] rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl hover:trnaslate-y-1 transition ">
            <img
                className="w-full h-[300px] object-cover "
            src={movie.image} alt="LiLo & Stich" />
            <h3 className="px-4 pt-4 text-white font-semibold">{movie.title}</h3>
            <p className="px-4 pb-4 text-[#ccc] text-sm">{movie.year}</p>
        </div>
    )
}