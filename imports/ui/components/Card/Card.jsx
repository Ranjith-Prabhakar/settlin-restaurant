import React from "react"
import { useNavigate } from "react-router-dom"

export function Card({ restaurant }) {
    console.log("restaurant.Card",restaurant)
    const navigate = useNavigate()  
    return (
        <>
        <div>
            <img src={restaurant.imageUrl} alt="restaurant image" width='100px' height='100px' />
            <h3>{restaurant.name}</h3>
            <button onClick={()=>navigate('/book_seat',{state:{restaurant:restaurant}})}>Book seats</button>
        </div>
        </>
    )
}
