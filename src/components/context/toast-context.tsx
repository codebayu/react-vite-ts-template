/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, createContext } from 'react';
import { ToastProps } from '../molecules';

type State = Omit<ToastProps, 'onClose'> | undefined;

interface GlobalToastProviderProps {
  children: JSX.Element
}

export const GlobalToastContext = createContext<{
  toastState: State;
  setToastState: (newState: State) => void;
  isOpenToast: boolean;
  closeToast: () => void;
  statusCode?: number;
}>({
  toastState: undefined,
  setToastState: () => {},
  isOpenToast: false,
  closeToast: () => {},
  statusCode: undefined,
});

export const GlobalToastProvider = ({ children }: GlobalToastProviderProps) => {
  const [toastState, setToastStateLocal] = useState<State>();
  const [isOpenToast, setIsOpenToast] = useState(false);

  const closeToast = () => setIsOpenToast(false);

  const setToastState = (newState: State) => {
    setToastStateLocal(newState);
    setIsOpenToast(true);
  };

  return (
    <GlobalToastContext.Provider
      value={{ toastState, isOpenToast, setToastState, closeToast }}
    >
      {children}
    </GlobalToastContext.Provider>
  );
};
