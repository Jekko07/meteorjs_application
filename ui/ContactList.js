import Meteor from 'meteor/meteor';
import React, { memo, useState } from 'react';
import { ContactsCollection } from '../api/collections/ContactsCollection.js';
import { useSubscribe, useFind } from 'meteor/react-meteor-data';
import { ErrorAlert } from './components/ErrorAlert.js';
import { Loading } from './components/Loading.js';

// Move ContactItem outside the ContactList component
const ContactItem = memo(({ contact, onArchive }) => (
  <li className="flex items-center justify-between space-x-3 py-4">
    <div className="flex min-w-0 flex-1 items-center space-x-3">
      {contact.imageUrl && (
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src={contact.imageUrl}
            alt=""
          />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900">
          {contact.name}
        </p>
        <p className="truncate text-sm font-medium text-gray-500">
          {contact.email}
        </p>
        <p className="truncate text-sm font-medium text-gray-500">
          {contact.walletId}
        </p>
      </div>
      <div>
        <a
          href="#"
          onClick={(event) => onArchive(event, contact._id)}
          className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
        >
          Archive
        </a>
      </div>
    </div>
  </li>
));

export const ContactList = () => {
  const isLoading = useSubscribe('contacts');
  const contacts = useFind(() =>
    ContactsCollection.find(
      { archived: { $ne: true } },
      { sort: { createdAt: -1 } }
    )
  );

  const [success, setSuccess] = useState('');

  const showSuccess = ({ message }) => {
    setSuccess(message);
    setTimeout(() => {
      setSuccess('');
    }, 5000);
  };

  const archiveContact = (event, _id) => {
    event.preventDefault();
    Meteor.call('contacts.archive', { contactId: _id });
    showSuccess({ message: 'Contact archived' });
  };

  if (isLoading()) {
    return <Loading />;
  }

  return (
    <div>
      {success && <ErrorAlert message={success} />}
      <div className="mt-10">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Contact List
        </h3>
        <ul className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
          {contacts.map((contact) => (
            <ContactItem
              key={contact._id}
              contact={contact}
              onArchive={archiveContact}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
