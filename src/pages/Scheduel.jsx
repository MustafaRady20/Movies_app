import React, { useState,useEffect } from "react";
import './scheduel.css'
import Card from "../components/Card";

const Scheduel = ()=>{
    const [data,setdata]=useState([])
    const [movies,setMovies]=useState([])

    const fetchData = () => {
        fetch("http://localhost:3000/data/movieData.json")
            .then(respones => respones.json())
            .then(data => setdata(data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(()=>{
        setMovies(data)
    })

    return <section id="scheduel" className="scheduel">
        <div className="container-fluid">
            <div className="row">
                <h4 className="section-title">Opening this week</h4>
            </div>
            <div className="row">
                <div className="filters">
                    <p>filter</p>
                </div>
            </div>
            <div className="row mt-5">
                {movies && movies.length > 0 && movies.map(movie => <Card key={movie._id} movie={movie} />)}
            </div>

        </div>
    </section>
}

export default Scheduel