import React, { ReactElement } from 'react';
import Auth from '../layouts/Auth';
import NextPageWithLayout from '../layouts/NextPageWithLayout';

const Rules: NextPageWithLayout = () => {
  return (
      <></>
  );
};

Rules.getLayout = function getLayout(page: ReactElement) {
    return (
        <Auth>{page}</Auth>
    )
}

export default Rules;