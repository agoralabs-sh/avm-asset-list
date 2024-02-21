import { ChakraProvider } from '@chakra-ui/react';
import { combineReducers, Store } from '@reduxjs/toolkit';
import React, { FC } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

// features
import { reducer as systemReducer } from '@app/features/system';

// pages
import LoadingPage from '@app/pages/LoadingPage';

// theme
import { theme } from '@app/theme';

// types
import type { IAppState } from '@app/types';
import type { IProps } from './types';

// utils
import makeStore from '@app/utils/makeStore';
import createRouter from './utils/createRouter';

const App: FC<IProps> = ({ i18next }: IProps) => {
  const store: Store<IAppState> = makeStore(
    combineReducers({
      system: systemReducer,
    })
  );

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <ChakraProvider theme={theme}>
          <RouterProvider
            fallbackElement={<LoadingPage />}
            router={createRouter()}
          />
        </ChakraProvider>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
