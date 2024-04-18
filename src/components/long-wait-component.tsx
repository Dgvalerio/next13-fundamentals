import { FC } from 'react';

export const LongWaitComponent: FC = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return <p>Carregado</p>;
};
