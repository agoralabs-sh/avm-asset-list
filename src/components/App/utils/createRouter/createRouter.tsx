import React from 'react';
import { createBrowserRouter, Router } from 'react-router-dom';

// components
import Root from '@app/components/Root';

// constants
import { BASE_ROUTE } from '@app/constants';

// pages
import HomePage from '@app/pages/HomePage';

export default function createRouter(): Router {
  return createBrowserRouter([
    {
      children: [
        {
          element: <HomePage />,
          path: BASE_ROUTE,
        },
      ],
      element: <Root />,
      path: BASE_ROUTE,
    },
  ]);
}
