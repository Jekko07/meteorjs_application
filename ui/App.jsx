import React from 'react';
import { ContactForm } from './ContactForm.jsx';
import { ContactList } from './ContactList.jsx';
import { Header } from './Header.jsx';
import { Wallet } from './Wallet.jsx';

export const App = () => (
  <div>
    <Header />
    <div className="min-h-full">
      <div className="mx-auto max-w-4xl p-2">
        <Wallet />
        <ContactForm />
        <ContactList />
      </div>
    </div>
  </div>
);
