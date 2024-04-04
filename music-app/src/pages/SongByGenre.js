import { useParams, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import NavNar from "../components/NavBar";

function SongByGenre(){

    const [genreSongs, setGenreSong] = useState([])
    const params = useParams()
    const songGenre = params.songGenre
    const {songs, uniqueGenres} = useOutletContext()

    console.log(songGenre)
    console.log(songs)
    console.log(genreSongs)

    useEffect(()=>{
        const filteredSongs = songs.filter(song => song.genre === songGenre);
        setGenreSong(filteredSongs);
    }, [songGenre])

    return(
        <main>
            <h2>{songGenre}</h2>
            {genreSongs.map((song, index) =>(
                <div key={index} className="song-box">
                    <h3>{song.name}</h3>
                    <img src={song.image} />,
                    <p>{song.artist}</p>
                </div>
            ))}
        </main>
    )
}

export default SongByGenre;