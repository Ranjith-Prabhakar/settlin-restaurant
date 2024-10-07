import {Meteor} from 'meteor/meteor'
import { RestaurantCollection } from './RestaurantCollection'

// Meteor.publish('restaurants',()=>{
//     return RestaurantCollection.find({},{fields:{tables:0}})
// })
// Meteor.publish('restaurants',()=>{
//     return RestaurantCollection.find({})
// })

Meteor.publish('restaurants.tables', function (id) {
    console.log("id:", id);
    const restaurants = RestaurantCollection.find(
        { _id: id },
        { fields: { tables: 1 } }
    );
    const restaurantData = restaurants.fetch();
    console.log("Fetched restaurant data:", restaurantData);
    return restaurants;
});

