import React from "react"
import { useLocation,useParams } from "react-router-dom"
import {Meteor} from 'meteor/meteor'
import { useTracker,useSubscribe} from 'meteor/react-meteor-data'
import { RestaurantCollection } from "../../../api/RestaurantCollection"

export function Restaurant(){
    const tableId = useParams().id

    const isLoading = !useSubscribe('restaurants');
    
    let restaurant = useTracker(()=>{
        // check how to retreive single document
        return RestaurantCollection.find({_id:tableId}).fetch()
    })

    const bookSeat = (_id,tableName,seat)=>{
        Meteor.call('bookSeat',{_id,tableName,seat})
    }
    return(
        <>{
            isLoading ? <div>Loading...</div> : <div style={{display:'flex' ,flexDirection:'column'}}>
            {
                restaurant[0].tables.map((table,index)=>{
                   return(
                     <div key={index}  style={{display:'flex' ,marginBottom:'20px'}}>
                        <h1 style={{marginRight:'20px'}}>{table.tableName}</h1>
                        {table.seats.map((seat,index)=>(
                            <div key={index} style={{display:'flex' , justifyContent:"space-between",alignItems:"center", marginRight:'40px'}}>
                            <h1 style={{marginRight:"30px"}}>{seat.seat}</h1>
                            <button onClick={()=>bookSeat(restaurant[0]._id,table.tableName,seat.seat,)}>{seat.status === "not-booked"? 'Available' : 'Booked'}</button>
                        </div>
                    ))}
                    </div>
                   )
                })
            }
            </div>
        }</>
        
    )
}