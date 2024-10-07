import {Meteor} from 'meteor/meteor'
import { RestaurantCollection } from './RestaurantCollection'

Meteor.publish('restaurants',()=>{
    return RestaurantCollection.find()
})

Meteor.publish('restaurants.tables',()=>{
    return RestaurantCollection.find({})
})