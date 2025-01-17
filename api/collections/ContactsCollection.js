import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import 'meteor/aldeed:collection2/static';

export const ContactsCollection = new Mongo.Collection('contacts');

const ContactsSchema = new SimpleSchema({
  name: {
    type: String,
  },
  email: {
    type: String,
    // regEx: SimpleSchema.RegEx.Email,
  },
  imageUrl: {
    type: String,
    optional: true,
  },
  walletId: {
    type: String,
    // regEx: SimpleSchema.RegEx.Id,
  },
  createdAt: {
    type: Date,
  },
});

ContactsCollection.attachSchema(ContactsSchema);
