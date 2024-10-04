import { Meteor } from 'meteor/meteor';
import '../imports/api/user.js'
import '../imports/api/RestaurantPublications.js'
import { RestaurantCollection } from '../imports/api/RestaurantCollection.js';


Meteor.startup(async () => {

 if(await RestaurantCollection.find().countAsync() === 0){
    let restaurants = [
        {name:'Kazamia',
         imageUrl:'/ROne.jpg',
         address:'123 Maple Street, Springfield, IL 62704, USA',
         tables:[
            {
                tableName:"Table-1",
                seats:[
                    {seat:"T1S1",status:"not-booked",userId:''},
                    {seat:"T1S2",status:"not-booked",userId:''},
                    {seat:"T1S3",status:"not-booked",userId:''},
                    {seat:"T1S4",status:"not-booked",userId:''}
                ]
            },
            {
                tableName:"Table-2",
                seats:[
                    {seat:"T1S1",status:"not-booked",userId:''},
                    {seat:"T1S2",status:"not-booked",userId:''},
                    {seat:"T1S3",status:"not-booked",userId:''},
                    {seat:"T1S4",status:"not-booked",userId:''}
                ]
            },
            {
                tableName:"Table-3",
                seats:[
                    {seat:"T1S1",status:"not-booked",userId:''},
                    {seat:"T1S2",status:"not-booked",userId:''},
                    {seat:"T1S3",status:"not-booked",userId:''},
                    {seat:"T1S4",status:"not-booked",userId:''}
                ]
            },
            {
                tableName:"Table-4",
                seats:[
                    {seat:"T1S1",status:"not-booked",userId:''},
                    {seat:"T1S2",status:"not-booked",userId:''},
                    {seat:"T1S3",status:"not-booked",userId:''},
                    {seat:"T1S4",status:"not-booked",userId:''}
              
                ]
            } 
        ]
    },   
        {name:'Paradise',
         imageUrl:'/RTwo.jpg',
         address:'456 Oak Avenue, Vancouver, BC V5K 0A1, Canada',
         tables:[
            {
                tableName:"Table-1",
                seats:[
                    {seat:"T1S1",status:"not-booked",userId:''},
                    {seat:"T1S2",status:"not-booked",userId:''},
                    {seat:"T1S3",status:"not-booked",userId:''},
                    {seat:"T1S4",status:"not-booked",userId:''}
                ]
            },
            {
                tableName:"Table-2",
                seats:[
                    {seat:"T1S1",status:"not-booked",userId:''},
                    {seat:"T1S2",status:"not-booked",userId:''},
                    {seat:"T1S3",status:"not-booked",userId:''},
                    {seat:"T1S4",status:"not-booked",userId:''}
                ]
            }, {
                tableName:"Table-3",
                seats:[
                    {seat:"T1S1",status:"not-booked",userId:''},
                    {seat:"T1S2",status:"not-booked",userId:''},
                    {seat:"T1S3",status:"not-booked",userId:''},
                    {seat:"T1S4",status:"not-booked",userId:''}
                ]
            }, {
                tableName:"Table-4",
                seats:[
                    {seat:"T1S1",status:"not-booked",userId:''},
                    {seat:"T1S2",status:"not-booked",userId:''},
                    {seat:"T1S3",status:"not-booked",userId:''},
                    {seat:"T1S4",status:"not-booked",userId:''}
                ]
            }
        ]}
    ]
    restaurants.map(restaurant=> RestaurantCollection.insertAsync(restaurant))
 }
  
});
