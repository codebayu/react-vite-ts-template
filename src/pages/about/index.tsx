import { GlobalToastContext } from '@components';
import { useContext } from 'react';

export const About = () => {
  const { setToastState } = useContext(GlobalToastContext);

  const openToast = () => {
    setToastState({ status: 'error', message: 'Error nih', });
  };
  
  return (
    <div>
      <h1>About</h1>
      <button onClick={openToast}>Open Toast</button>
    </div>
  );
};
