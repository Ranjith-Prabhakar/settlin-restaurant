import {Meteor} from 'meteor/meteor'
import { RestaurantCollection } from './RestaurantCollection'

// Meteor.publish('restaurants',()=>{
//     return RestaurantCollection.find({},{fields:{tables:0}})
// })
Meteor.publish('restaurants',()=>{
    return RestaurantCollection.find({})
})

// Meteor.publish('restaurants.tables',()=>{
//     return RestaurantCollection.find({},{fields:{tables:1}})
// })