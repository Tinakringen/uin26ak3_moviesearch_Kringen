import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import funkitj from "../assets/funkitj.jpg"

export default function Movie(){

    const {movie} = useParams()
    const [film, setFilm] = useState(null)
    const apiKey = import.meta.env.VITE_APP_API_KEY

    useEffect(() => {
        const getFilm = async () => {
            const response = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`)
            const data = await response.json()
            console.log(data)
            setFilm(data)
            
        }
        getFilm()
    }, [movie])


    return(
        <main>
            <img src={film?.Poster} alt="Movie poster" onError={(e) => e.target.src = funkitj}/>
            <h1>{film?.Title}</h1>
            <p>{film?.Year}</p>
            <p>{film?.Genre}</p>
            <p>{film?.Plot}</p>
        </main>

    ) 

}