import type { Router as RemixRouter } from '@remix-run/router';
import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

// components
import Root from '@app/components/Root';

// constants
import {
  ASSET_ROUTE,
  BASE_ROUTE,
  CHAIN_ROUTE,
  SEARCH_ROUTE,
} from '@app/constants';

// pages
import AssetPage from '@app/pages/AssetPage';
import SearchPage from '@app/pages/SearchPage';

export default function createRouter(): RemixRouter {
  return createBrowserRouter([
    {
      children: [
        {
          element: <Navigate replace={true} to={SEARCH_ROUTE} />,
          path: BASE_ROUTE,
        },
        {
          element: <AssetPage />,
          path: `${CHAIN_ROUTE}/:genesisHash/${ASSET_ROUTE}/:assetID`,
        },
        {
          element: <SearchPage />,
          path: SEARCH_ROUTE,
        },
      ],
      element: <Root />,
      path: BASE_ROUTE,
    },
  ]);
}
