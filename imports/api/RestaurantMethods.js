import {Meteor} from 'meteor/meteor'
import { RestaurantCollection } from './RestaurantCollection'

Meteor.methods({
    "bookSeat":({_id,tableName,seat})=>{
        RestaurantCollection.updateAsync({_id,'tables.tableName':tableName,'tables.seats.seat':seat},{$set:{'tables.$[tableName].seats.$[seatNo].status':"booked"}},{arrayFilters:[{'tableName.tableName':tableName},{'seatNo.seat':seat}]})
    },
})