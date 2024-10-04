import React, { useEffect } from "react"
import { Card } from "../Card/Card"
import {useSubscribe,useTracker} from 'meteor/react-meteor-data'
import { RestaurantCollection } from "../../../api/RestaurantCollection"

export function Home(){
    const isLoading = !useSubscribe('restaurants');
    
    let restaurants = useTracker(()=>{
        return RestaurantCollection.find().fetch()
    })

    useEffect(()=>{
        console.log("restaurants",restaurants)
    },[restaurants])

    return (
        <>
        {
            isLoading ? <h1>loading...</h1> :
            restaurants.map((restaurant) => <Card key={restaurant.name} restaurant={restaurant} />)
        }
        </>
    )
}
