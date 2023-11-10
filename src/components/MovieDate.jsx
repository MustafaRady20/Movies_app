import React, { useState } from "react";

import './movieDate.css'
import Modal from "./Modal";

const MovieDate = ({movie}) => {
    const [modal,setModal]= useState(false)
    const toggleModal= ()=>{
        setModal(!modal)
    }
    return (
        <>
            <div className={`date ${movie.active ? 'active':undefined}`}>
                <h2>{movie.date}</h2>
            </div>

            <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? 'active' : undefined}`}>
                <div className="playbtn" >
                    <ion-icon name="play-outline" onClick={toggleModal}></ion-icon>
                </div>
                <p>Watch Trailer</p>
            </div>
            {movie.active && <Modal movie={movie} status={modal} toggleModal={toggleModal}/>}
        </>
    )
}

export default MovieDate