import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { App } from '../ui/App.jsx';
import '../api/methods/ContactsMethods'; // Import for Meteor's optimistic UI
import '../api/methods/TransactionsMethods';

Meteor.startup(() => {
  // Create a root using createRoot
  const root = createRoot( document.getElementById('react-target'));
  // Render the App component
  root.render(<App />);
});
