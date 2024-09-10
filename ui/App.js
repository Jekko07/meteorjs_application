import React from 'react';
import { Header } from './Header';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './Router';

export const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="min-h-full">
        <div className="mx-auto max-w-4xl p-2">
          <AppRoutes />
        </div>
      </div>
    </div>
  </BrowserRouter>
);
