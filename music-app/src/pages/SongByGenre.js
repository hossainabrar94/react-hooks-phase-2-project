import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SongByGenre(){

    const [song, setSong] = useState()
    const params = useParams()
    const songId = params

    useEffect(()=>{
        fetch(``)
    })

    return(
        <>
        </>
    )
}

export default SongByGenre;