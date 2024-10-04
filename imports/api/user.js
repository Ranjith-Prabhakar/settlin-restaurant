import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
    async 'createNewUser'({ userName }) {
        // Validate the input
        new SimpleSchema({
            userName: { type: String },
        }).validate({ userName });

        const existingUser = await Meteor.users.findOneAsync({ username: userName });

        if (existingUser) {
            throw new Meteor.Error('user-exists', 'User already exists');
        } else {
            // Create the new user
            const userId = await Accounts.createUser({ username: userName, password: userName });
            return userId; // Return the new user's ID
        }
    }
});
