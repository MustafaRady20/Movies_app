import React from "react";
import './modal.css'
const Modal = ({movie,status,toggleModal})=>{
    return(
        <>
            <div className={`movieModal ${status ? 'active': undefined}`}>
            <a href="." className="modalColse" >
                    <ion-icon name="close-outline" onClick={toggleModal}></ion-icon>
            </a>

            <iframe
            width="1080"
            height="720"
            src={movie.video}
            title={`${movie.title} | official trailer`}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope;picture-in-picture; web-share"
            allowFullScreen
            ></iframe>
        </div>
        </>
    )
}

export default Modal