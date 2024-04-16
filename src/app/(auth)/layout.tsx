import { PropsWithChildren } from 'react';

import { NextPage } from 'next';

const AuthLayout: NextPage<PropsWithChildren> = ({ children }) => (
  <>
    <h1>Logo do App</h1>
    <div>{children}</div>
  </>
);

export default AuthLayout;
