import React, { Suspense } from 'react';

import { NextPage } from 'next';

import { GithubProfile } from '@/components/github-profile';
import { LongWaitComponent } from '@/components/long-wait-component';

const Home: NextPage = () => (
  <div>
    <h1>Home!</h1>
    <Suspense
      fallback={<p className="bg-gray-100">Carregando LongWaitComponent</p>}
    >
      <LongWaitComponent />
    </Suspense>
    <Suspense
      fallback={<p className="bg-green-100">Carregando GithubProfile</p>}
    >
      <GithubProfile />
    </Suspense>
  </div>
);

export default Home;
