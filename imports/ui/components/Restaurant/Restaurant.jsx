// import React from "react"
// import { useLocation } from "react-router-dom"
// import {Meteor} from 'meteor/meteor'
// import { useTracker,useSubscribe} from 'meteor/react-meteor-data'

// export function Restaurant(){
//     const {restaurant} = useLocation().state

//     console.log("restaurant.Restaurant",restaurant)

//     const bookSeat = (_id,tableName,seat)=>{
//         console.log("Restaurant.bookSeat",_id,tableName,seat)
//         Meteor.call('bookSeat',{_id,tableName,seat})
//     }
//     return(
        
//         <div style={{display:'flex' ,flexDirection:'column'}}>
//         {
//             restaurant.tables.map((table,index)=>{
//                return(
//                  <div key={index}  style={{display:'flex' ,marginBottom:'20px'}}>
//                     <h1 style={{marginRight:'20px'}}>{table.tableName}</h1>
//                     {table.seats.map((seat,index)=>(
//                         <div key={index} style={{display:'flex' , justifyContent:"space-between",alignItems:"center", marginRight:'40px'}}>
//                         <h1 style={{marginRight:"30px"}}>{seat.seat}</h1>
//                         <button onClick={()=>bookSeat(restaurant._id,table.tableName,seat.seat,)}>{seat.status === "not-booked"? 'Available' : 'Booked'}</button>
//                     </div>
//                 ))}
//                 </div>
//                )
//             })
//         }
//         </div>
//     )
// }



import React from "react"
import { useLocation } from "react-router-dom"
import {Meteor} from 'meteor/meteor'
import { useTracker,useSubscribe} from 'meteor/react-meteor-data'
import { RestaurantCollection } from "../../../api/RestaurantCollection"

export function Restaurant(){
    const {restaurant} = useLocation().state
    console.log("restaurant-------",restaurant._id)
    console.log("restaurant.Restaurant",restaurant)

    const isLoading = !useSubscribe('restaurants');
    
    let restaurant2 = useTracker(()=>{
        return RestaurantCollection.find({_id:restaurant._id}).fetch()
    })

    console.log("restaurant2",restaurant2)
    const bookSeat = (_id,tableName,seat)=>{
        console.log("Restaurant.bookSeat",_id,tableName,seat)
        Meteor.call('bookSeat',{_id,tableName,seat})
    }
    return(
        
        <div style={{display:'flex' ,flexDirection:'column'}}>
        {
            restaurant2[0].tables.map((table,index)=>{
               return(
                 <div key={index}  style={{display:'flex' ,marginBottom:'20px'}}>
                    <h1 style={{marginRight:'20px'}}>{table.tableName}</h1>
                    {table.seats.map((seat,index)=>(
                        <div key={index} style={{display:'flex' , justifyContent:"space-between",alignItems:"center", marginRight:'40px'}}>
                        <h1 style={{marginRight:"30px"}}>{seat.seat}</h1>
                        <button onClick={()=>bookSeat(restaurant._id,table.tableName,seat.seat,)}>{seat.status === "not-booked"? 'Available' : 'Booked'}</button>
                    </div>
                ))}
                </div>
               )
            })
        }
        </div>
    )
}