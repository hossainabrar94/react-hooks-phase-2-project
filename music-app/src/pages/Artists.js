import { useOutletContext } from "react-router-dom";

function Artists(){
    
    const songs = useOutletContext()

    const artists = songs.map(song => song.artist)

    const uniqueArtists = artists.filter((artist,index) => {
        return artists.indexOf(artist) === index
    })

    return(

        <main>
            <header>
                <h1>Artist List</h1>
            </header>
            {uniqueArtists.map((artist,index) =>(
                <article key={index} className="artist-box">
                    <h3>{artist}</h3>
                </article>
            ))}

        </main>
    )
}

export default Artists;