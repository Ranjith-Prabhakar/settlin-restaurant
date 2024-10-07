import React, { useEffect, useState } from "react"
import RestaurantCard from "../Card/Card"
import { useSubscribe, useTracker } from 'meteor/react-meteor-data'
import { RestaurantCollection } from "../../../api/RestaurantCollection"
import { Stack } from "@mui/material";
import {Meteor} from 'meteor/meteor'

export function Home() {
    const isLoading = !useSubscribe('restaurants');
    const [restaurants,setRestaurants] = useState([])

    useEffect(()=>{
        Meteor.call("loadRestaurant",(err,result)=>{
            if(!err){
                setRestaurants(result)
            }
        })
    },[])
   

    return (
        <>
            {
                isLoading ? <h1>loading...</h1> :
                    <Stack direction={"row"} spacing={2}>
                        {
                            restaurants.map((restaurant) => <RestaurantCard key={restaurant.name} restaurant={restaurant} />)
                        }
                    </Stack>
            }
        </>
    )
}
