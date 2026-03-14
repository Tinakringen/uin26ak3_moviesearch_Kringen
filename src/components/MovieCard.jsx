import { useNavigate } from "react-router-dom"
import funkitj from "../assets/funkitj.jpg"

export default function MovieCard({movie}){

    const navigate = useNavigate()

    const handleClick = () => {
    navigate(`/${movie.Title}`)
    }

    return (
        <article className="movie-card" onClick={handleClick}>
            <img src={movie?.Poster} alt="Movie poster" onError={(e) => e.target.src = funkitj}/>
            <h3>{movie.Title} ({movie.Year})</h3>
        </article>
    )
}