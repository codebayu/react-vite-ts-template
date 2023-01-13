import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
  AppRouter,
  GlobalToastContext,
  GlobalToastProvider,
  Toast,
} from '@components';
import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

const AppWithToast = () => {
  const { toastState, closeToast, isOpenToast } =
    useContext(GlobalToastContext);
  return (
    <>
      <AppRouter />
      <Toast
        open={isOpenToast}
        status={toastState?.status}
        autoHideDuration={
          toastState?.autoHideDuration ? toastState.autoHideDuration : 3000
        }
        title={toastState?.title}
        message={toastState?.message}
        onClose={closeToast}
      />
    </>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalToastProvider>
        <BrowserRouter>
          <AppWithToast />
        </BrowserRouter>
      </GlobalToastProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
