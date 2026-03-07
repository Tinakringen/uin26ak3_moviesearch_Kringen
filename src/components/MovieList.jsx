import MovieCard from "./MovieCard"

export default function MovieList({movies}){
    return (
        <section>
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </section>
    )
}