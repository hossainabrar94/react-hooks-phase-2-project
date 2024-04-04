import { useOutletContext, Link } from "react-router-dom";

function Playlists(){

    // Display playlist based on genres
    const songs = useOutletContext()

    const genres = songs.map(song => song.genre)
    const uniqueGenres = genres.filter((genre, index) => {
        return genres.indexOf(genre) === index
    })

    return(
        <main>
            <h1>Playlist</h1>
            {uniqueGenres.map((genre) => (
                <div>
                    <h2>
                    <Link to={`/playlists/${genre}`} style={{textDecoration: 'none'}}>{genre}</Link>
                    </h2>
                </div>
            ))}
        </main>
    )
}

export default Playlists;