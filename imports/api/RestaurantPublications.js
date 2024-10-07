import {Meteor} from 'meteor/meteor'
import { RestaurantCollection } from './RestaurantCollection'


Meteor.publish('restaurants.tables', function (id) {

    // couldn't we use find method (cursor)
    const restaurants = RestaurantCollection.find(
        { _id: id },
        { fields: { tables: 1 } }
    );
    return restaurants;
});

