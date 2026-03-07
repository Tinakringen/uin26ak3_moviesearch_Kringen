import { useEffect, useState } from "react"
import History from "../components/History"
import MovieList from "../components/MovieList"

export default function Home(){

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState()
    const storedHistory = localStorage.getItem("search")
    const [focused, setFocused] = useState(false)
    const [history, setHistory] = useState(storedHistory ? JSON.parse(storedHistory) : [])

    const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    const apiKey = import.meta.env.VITE_APP_API_KEY

    useEffect(() => {
        localStorage.setItem("search", JSON.stringify(history))
    }, [history])

    useEffect(() => {
        getMovies("james bond")
    }, [])


    const getMovies = async(film) => {
        try
        {
            const response = await fetch(`http://www.omdbapi.com/?s=${film}&apikey=${apiKey}&type=movie`)
            const data = await response.json()
            setMovies(data.Search)
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()

        setHistory((prev) => [...prev, search])  
    }

    console.log(history)

    // Local storage remove for å tømme loggen

    return (
        <main>
            <h1>Forside</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Søk etter film
                    <input type="search" placeholder="Harry Potter" onChange={handleChange} onFocus={() => setFocused(true)} /*onBlur={() => setFocused(false)}*/></input>
                </label>
                {focused ? <History history={history} setSearch={setSearch}/> : null}
                <button onClick={() => getMovies(search)}>Søk</button>
            </form> 
            <MovieList movies={movies} />
        </main>
    )  
}