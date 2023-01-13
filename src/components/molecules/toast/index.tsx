import { Box, Slide, SlideProps, Snackbar } from '@mui/material';
import { icons } from '@constant';
import { ToastSx as sx } from './styles';
import { CloseButton } from '@components';

export type ToastProps = {
  open?: boolean;
  autoHideDuration?: number;
  onClose: () => void;
  status?: 'success' | 'error';
  title?: string;
  message?: string | JSX.Element;
  buttonText?: string;
};

const SlideUp = (props: SlideProps) => <Slide {...props} direction="up" />;

export const Toast = ({
  open = false,
  autoHideDuration,
  onClose,
  status = 'success',
  title,
  message,
}: ToastProps) => {
  const renderTitle = title ?? (status === 'error' ? 'Error' : 'Success');
  const renderMessage =
    message ??
    (status === 'error'
      ? 'Something went wrong, please try again!'
      : undefined);
  return (
    <Snackbar
      sx={sx.snackbarRoot}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      ContentProps={{ sx: sx.snackbar, elevation: 0 }}
      TransitionComponent={SlideUp}
      message={
        <Box sx={sx.wrapper}>
          <Box sx={sx.body}>
            {status === 'success' ? (
              <Box
                component={icons.TaskAltIcon}
                sx={{ ...sx.icon, ...sx.iconCheck }}
              />
            ) : (
              <Box
                component={icons.ReportProblem}
                sx={{ ...sx.icon, ...sx.iconX }}
              />
            )}
            <Box sx={sx.content}>
              <Box sx={sx.title}>{renderTitle}</Box>
              {renderMessage ? (
                <Box sx={sx.message}>{renderMessage}</Box>
              ) : null}
            </Box>
            <CloseButton size="medium" onClick={onClose} />
          </Box>
        </Box>
      }
    />
  );
};
