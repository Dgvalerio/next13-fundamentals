import { NextPage } from 'next';

export const GithubProfile: NextPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch('https://api.github.com/users/dgvalerio');

  const user = await response.json();

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
};
