// import React from "react"
// import { useParams } from "react-router-dom"
// import {Meteor} from 'meteor/meteor'
// import { useTracker,useSubscribe} from 'meteor/react-meteor-data'
// import { RestaurantCollection } from "../../../api/RestaurantCollection"
// import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';

// export function Restaurant(){
//     const tableId = useParams().id

//     const isLoading = !useSubscribe('restaurants');

//     let restaurant = useTracker(() => {
//         return RestaurantCollection.findOne({ _id: tableId });
//     });


//     console.log("tableId",tableId)
//     console.log("restaurant",restaurant)
//     const bookSeat = (_id,tableName,seat)=>{
//         Meteor.call('bookSeat',{_id,tableName,seat})
//     }
//     return(
//         <>{
//             isLoading ? <div>Loading...</div> : <div style={{display:'flex' ,flexDirection:'column'}}>
//             {
//                 restaurant.tables.map((table,index)=>{
//                    return(
//                      <div key={index}  style={{display:'flex' ,marginBottom:'20px'}}>
//                         <h1 style={{marginRight:'20px'}}><TableRestaurantIcon />{table.tableName}</h1>
//                         {table.seats.map((seat,index)=>(
//                             <div key={index} style={{display:'flex' , justifyContent:"space-between",alignItems:"center", marginRight:'40px'}}>
//                             <h1 style={{marginRight:"30px"}}>{seat.seat}</h1>
//                             <button onClick={()=>bookSeat(restaurant[0]._id,table.tableName,seat.seat,)}>{seat.status === "not-booked"? 'Available' : 'Booked'}</button>
//                         </div>
//                     ))}
//                     </div>
//                    )
//                 })
//             }
//             </div>
//         }</>

//     )
// }



import React from "react"
import { useParams } from "react-router-dom"
import { Meteor } from 'meteor/meteor'
import { useTracker, useSubscribe } from 'meteor/react-meteor-data'
import { RestaurantCollection } from "../../../api/RestaurantCollection"
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography,Stack } from "@mui/material"

export function Restaurant() {
    const tableId = useParams().id

    const isLoading = !useSubscribe('restaurants');

    let restaurant = useTracker(() => {
        return RestaurantCollection.findOne({ _id: tableId });
    });


    console.log("tableId", tableId)
    console.log("restaurant", restaurant)
    const bookSeat = (_id, tableName, seat) => {
        Meteor.call('bookSeat', { _id, tableName, seat })
    }
    return (
        <>{
            isLoading ? <div>Loading...</div> : <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell align="right" sx={{ color: 'primary.dark' ,fontWeight:'bold', fontSize:'20px'}} >Tables</TableCell>
                            <TableCell align="right" sx={{ color: 'primary.dark' ,fontWeight:'bold', fontSize:'20px'}}>Seat-1</TableCell>
                            <TableCell align="right" sx={{ color: 'primary.dark' ,fontWeight:'bold', fontSize:'20px'}}>Seat-2</TableCell>
                            <TableCell align="right" sx={{ color: 'primary.dark' ,fontWeight:'bold', fontSize:'20px'}}>Seat-3</TableCell>
                            <TableCell align="right" sx={{ color: 'primary.dark' ,fontWeight:'bold', fontSize:'20px'}}>Seat-4</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            restaurant.tables.map((table, index) => {
                                return (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="right" ><Typography color="primary" component={"h6"}> {table.tableName}</Typography></TableCell>

                                        {table.seats.map((seat, index) => (
                                            <TableCell align="right">
                                                <Button variant="outlined" onClick={() => bookSeat(restaurant._id, table.tableName, seat.seat,)}>{seat.status === "not-booked" ? 'Available' : 'Booked'}</Button>
                                            </TableCell>
                                        ))}
                                    </TableRow>

                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        }</>

    )
}