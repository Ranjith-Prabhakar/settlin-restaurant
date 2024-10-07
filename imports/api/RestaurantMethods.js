import { Meteor } from 'meteor/meteor';
import { RestaurantCollection } from './RestaurantCollection';

Meteor.methods({
  "loadRestaurant":async function(){
    let restaurants = await RestaurantCollection.find({},{fields:{tables:0}}).fetch()
    console.log("restaurants",restaurants)
    return restaurants
  },
  "bookSeat": function({ _id, tableName, seat }) {
    RestaurantCollection.updateAsync(
      {
        _id: _id,
        'tables.tableName': tableName,
        'tables.seats.seat': seat
      },
      {
        $set: {
          'tables.$[table].seats.$[seat].status': "booked",
          'tables.$[table].seats.$[seat].userId': this.userId
        }
      },
      {
        arrayFilters: [
          { 'table.tableName': tableName },
          { 'seat.seat': seat }
        ]
      }
    );
  }
});
