import React, { useEffect } from "react"
import RestaurantCard from "../Card/Card"
import { useSubscribe, useTracker } from 'meteor/react-meteor-data'
import { RestaurantCollection } from "../../../api/RestaurantCollection"
import { Stack } from "@mui/material";

export function Home() {
    const isLoading = !useSubscribe('restaurants');

    let restaurants = useTracker(() => {
        return RestaurantCollection.find().fetch()
    })


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
