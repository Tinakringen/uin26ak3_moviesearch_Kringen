

export default function MovieCard({movie}){

    return (
        <article>
            <h3>{movie.Title}</h3>
            {<img src={movie?.Poster} alt="Movie poster" />}
            <p>{movie?.Year}</p>
        </article>
    )
}