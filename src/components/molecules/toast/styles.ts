import { AsSxObject } from '@types';

export const ToastSx = AsSxObject({
  snackbarRoot: {
    '&.MuiSnackbar-anchorOriginBottomCenter': {
      bottom: {
        xs: '73px',
        md: '8px',
      },
    },
  },
  snackbar: {
    padding: 0,
    boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)',
    borderRadius: '8px',
    color: (theme) => theme.palette.text.primary,
    backgroundColor: '#fff',
    '& .MuiSnackbarContent-message': {
      padding: 0,
    },
  },
  wrapper: {
    position: 'relative',
    padding: '16px',
    minWidth: '450px',
    '@media screen and (max-width: 480px)': {
      minWidth: 0,
      maxWidth: 'calc(100vw - 32px)',
    },
  },
  body: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    flexGrow: 0,
    flexShrink: 0,
    height: '24px',
    width: '24px',
    marginRight: '16px',
  },
  iconCheck: {
    color: '#3EBA13',
  },
  iconX: {
    color: 'red',
  },
  content: {
    width: '1%',
    flexGrow: 1,
    flexShrink: 1,
    marginRight: '16px',
  },
  title: {
    fontWeight: 500,
  },
  message: {
    marginTop: '4px',
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: 1.4,
    color: (theme) => theme.palette.text.secondary,
  },
  button: {
    flexGrow: 0,
    flexShrink: 0,
    marginLeft: '16px',
    marginRight: '-8px',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '12px',
    textDecoration: 'underline',
    color: (theme) => theme.palette.text.primary,
    '&:hover, &:focus': {
      textDecoration: 'underline',
    },
  },
  progress: {
    position: 'absolute',
    height: '4px',
    bottom: 0,
    left: 0,
  },
  success: {
    backgroundColor: '#3EBA13',
  },
  error: {
    backgroundColor: '#FF2D2D',
  },
});