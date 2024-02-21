import { Center } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

// constants
import { BODY_BACKGROUND_COLOR } from '@app/constants';

// selectors
import { useSelectTitle } from '@app/selectors';

// types
import type { IProps } from './types';

const Layout: FC<IProps> = ({ children }: IProps) => {
  // selectors
  const title: string = useSelectTitle();

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Center as="main" backgroundColor={BODY_BACKGROUND_COLOR}>
        {children}
      </Center>
    </>
  );
};

export default Layout;
