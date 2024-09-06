import React from 'react';
import { ContactForm } from './ContactForm.js';
import { ContactList } from './ContactList.js';
import { Header } from './Header.js';
import { Wallet } from './Wallet.js';

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
