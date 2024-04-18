import { NextPage } from 'next';

const Home: NextPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch('https://api.github.com/users/dgvalerio');

  const user = await response.json();

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
};

export default Home;
