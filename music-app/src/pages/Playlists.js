import { useOutletContext, Outlet, Link } from "react-router-dom";

function Playlists(){

    // Display playlist based on genres
    const songs = useOutletContext()

    const genres = songs.map(song => song.genre)
    const uniqueGenres = genres.filter((genre, index) => {
        return genres.indexOf(genre) === index
    })

    const contextValue = {
        songs,
        uniqueGenres,
      };

    return(
        <main>
                        <Outlet context = {contextValue}/>
            <h1>Playlist</h1>

            {uniqueGenres.map((genre, index) => (
                <div key={index}>
                    <h2>
                    <Link to={`/playlists/${genre}`} style={{textDecoration: 'none'}}>{genre}</Link>
                    </h2>
                </div>
            ))}
        </main>
    )
}

export default Playlists;