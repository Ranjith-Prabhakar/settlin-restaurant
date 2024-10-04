import React from "react"
import { useLocation } from "react-router-dom"

export function Restaurant(){
    const {restaurant} = useLocation().state
    console.log("restaurant.Restaurant",restaurant)
    return(
        // <div style={{display:'flex' ,flexDirection:'column'}}>
        // {
        //     restaurant.tables.map((table,index)=>{
        //        return(
        //          <div key={index}  style={{display:'flex' ,marginBottom:'20px'}}>
        //             <h1 style={{marginRight:'20px'}}>Table : {index+1}</h1>
        //             {table.map((seat,index)=>(
        //                 <div key={index} style={{display:'flex' , justifyContent:"space-between",alignItems:"center", marginRight:'40px'}}>
        //                 <h1 style={{marginRight:"30px"}}>{seat.seat}</h1>
        //                 <button>{seat.status === "not-booked"? 'Available' : 'Booked'}</button>
        //             </div>
        //         ))}
        //         </div>
        //        )
        //     })
        // }
        // </div>
        <div style={{display:'flex' ,flexDirection:'column'}}>
        {
            restaurant.tables.map((table,index)=>{
               return(
                 <div key={index}  style={{display:'flex' ,marginBottom:'20px'}}>
                    <h1 style={{marginRight:'20px'}}>{table.tableName}</h1>
                    {/* {table.map((seat,index)=>(
                        <div key={index} style={{display:'flex' , justifyContent:"space-between",alignItems:"center", marginRight:'40px'}}>
                        <h1 style={{marginRight:"30px"}}>{seat.seat}</h1>
                        <button>{seat.status === "not-booked"? 'Available' : 'Booked'}</button>
                    </div>
                ))} */}
                </div>
               )
            })
        }
        </div>
    )
}