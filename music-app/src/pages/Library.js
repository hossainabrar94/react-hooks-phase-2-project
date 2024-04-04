import { useOutletContext, Link } from "react-router-dom";

function Library(){

    //Display all songs
    const songs = useOutletContext()
    // console.log(songs)

    return (
        <main>
            <h1>Library</h1>
            <article>
                {songs.map((song, index) => (
                    <div key={index} className="song-box">
                        <h2>
                            <Link to={`/songs/${song.id}`}>{song.name}</Link>
                        </h2>,
                        <img src={song.image} />,
                        <p>{song.artist}</p>
                    </div>
                ))}
            </article>
        </main>
    )
}

export default Library;