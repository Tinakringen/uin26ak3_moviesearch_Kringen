import MovieCard from "./MovieCard"

export default function MovieList({movies}){
    return (
        <section className="movie-list">
            {movies?.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </section>
    )
}