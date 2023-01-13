import { GlobalToastContext } from '@components';
import { useContext } from 'react';

export const Home = () => {
  const { setToastState } = useContext(GlobalToastContext);

  const onOpenToast = () => {
    setToastState({ status: 'success', message: 'hai berhasil nih' });
  };
  
  return (
    <>
      <h1>Home</h1>
      <button onClick={onOpenToast}>Toast Open</button>
    </>
  );
};
