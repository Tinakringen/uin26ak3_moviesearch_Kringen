import { useNavigate } from "react-router-dom"
import nophoto from "../assets/nophoto.png"

export default function MovieCard({movie}){

    const navigate = useNavigate()

    const handleClick = () => {
    navigate(`/${movie.imdbID}`)
    }

    return (
        <article className="movie-card" onClick={handleClick}>
            <img src={movie?.Poster} alt="Movie poster" onError={(e) => e.target.src = nophoto}/>
            <h3>{movie.Title} ({movie.Year})</h3>
        </article>
    )
}