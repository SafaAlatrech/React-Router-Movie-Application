import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Startrating from './Startrating';
import { Link } from 'react-router-dom';

const MovieCard = ({card}) => {
  return (
    <div className="movie-card">
    <Startrating rate={card.rating}/>
    <img src={card.image} alt=""/>
    <p>{card.name}</p>
    <p>{card.date}</p>
    <Link to={`/description/${card.name}`} ><button className="btn btn-danger">See Description</button></Link>
    </div>
  )
}
export default MovieCard
