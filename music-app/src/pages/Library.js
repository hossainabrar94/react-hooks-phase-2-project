import { useOutletContext } from "react-router-dom";

function Library(){

    const {songs} = useOutletContext()

    return (
        <main>
            <h1>Library</h1>
            <article>
                {songs.map((song, index) => (
                    <div key={index} className="song-box">
                        <h2>
                            {song.name}
                        </h2>
                        <img src={song.image} className="image-box"/>
                        <h4>{song.artist}</h4>
                        <p>Listens: {song.listens.toLocaleString()}</p>
                    </div>
                ))}
            </article>
        </main>
    )
}

export default Library;