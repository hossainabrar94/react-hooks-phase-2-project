import { useOutletContext, Outlet, useNavigate } from "react-router-dom";

function Playlists(){

    // Display playlist based on genres
    const {songs} = useOutletContext()

    const genres = songs.map(song => song.genre)
    const navigate = useNavigate()
    const uniqueGenres = genres.filter((genre, index) => {
        return genres.indexOf(genre) === index
    })

    const contextValue = {
        songs,
        uniqueGenres,
      };

      function handleSelectChange(e){
        const selectedGenre = e.target.value
        navigate(`/playlists/${selectedGenre}`)
      }

    return(
        <main>
            <h1>Playlist</h1>
            <select onChange={handleSelectChange}>
                <option value=''>Choose a Genre</option>
                {uniqueGenres.map((genre, index) => (
                    <option key={index} value={genre}>{genre}</option>
                ))}
            </select>
            <Outlet context = {contextValue}/>
        </main>
    )
}

export default Playlists;