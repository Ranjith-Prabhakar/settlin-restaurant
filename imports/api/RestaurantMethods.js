import {Meteor} from 'meteor/meteor'
import { RestaurantCollection } from './RestaurantCollection'

Meteor.methods({
    "bookSeat":function({_id,tableName,seat}){
        console.log("this.userId",this.userId)
        RestaurantCollection.updateAsync({_id,'tables.tableName':tableName,'tables.seats.seat':seat},{$set:{'tables.$[tableName].seats.$[seatNo].status':"booked","tables.$[tableName].seats.$[seatNo].userId":this.userId}},{arrayFilters:[{'tableName.tableName':tableName},{'seatNo.seat':seat}]})
    },
})