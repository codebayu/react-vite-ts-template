import '@mui/lab/themeAugmentation';
import { createTheme } from '@mui/material';
// import { icons } from '@Constants';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          font-family: Inter, sans-serif;
          color: #040E14;
          overflow: hidden;
        }

        .pac-container {
          font-family: Inter, sans-serif;
          z-index: 1300;
          border-radius: 0 0 8px 8px;
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
        }

        .pac-container::after {
          display: none;
        }

        .pac-item {
          cursor: pointer;
          padding: 4px 16px;
        }

        .pac-item:hover {
          background-color: #f0f0f0;
        }
      `,
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          listStyle: 'none',
          '& .MuiGridListTile-root': {
            width: 'auto',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        contained: {
          height: '40px',
          padding: '4px 24px',
          fontSize: '16px',
          fontWeight: 600,
          textTransform: 'capitalize',
          borderRadius: '8px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          height: '40px',
          padding: '4px 24px',
          backgroundColor: '#288ccc',
          '&:hover': {
            backgroundColor: '#2276aa',
          },
          '@media (hover: none)': {
            // 2 specificity againts MUI styles
            '&&:hover': {
              backgroundColor: '#2276aa',
            },
          },
          // 2 specificity againts MUI styles
          '&.MuiLoadingButton-loading.MuiLoadingButton-loading': {
            backgroundColor: '#288ccc',
            '& .MuiLoadingButton-loadingIndicator': {
              color: '#fff',
            },
          },
        },
        containedSecondary: {
          height: '40px',
          padding: '4px 24px',
          backgroundColor: '#3EBA13',
          '&:hover': {
            backgroundColor: '#36a90f',
          },
          '@media (hover: none)': {
            // 2 specificity againts MUI styles
            '&&:hover': {
              backgroundColor: '#36a90f',
            },
          },
          // 2 specificity againts MUI styles
          '&.MuiLoadingButton-loading.MuiLoadingButton-loading': {
            backgroundColor: '#3EBA13',
            '& .MuiLoadingButton-loadingIndicator': {
              color: '#fff',
            },
          },
        },
        outlined: {
          height: '40px',
          padding: '5px 24px',
          fontWeight: 600,
          fontSize: '16px',
          textTransform: 'capitalize',
          color: '#3EBA13',
          borderRadius: '8px',
          border: '1px solid #3EBA13',
          '&:hover': {
            borderColor: '#3EBA13',
            backgroundColor: 'rgba(62, 186, 19, 0.1)',
          },
          '@media (hover: none)': {
            // 2 specificity againts MUI styles
            '&&:hover': {
              borderColor: '#3EBA13',
              backgroundColor: 'rgb(30, 92, 10, 0.1)',
            },
          },
        },
        outlinedError: {
          color: '#FF2D2D',
          borderColor: '#FF2D2D',
          '&:hover': {
            borderColor: '#FF2D2D',
            backgroundColor: 'rgba(255, 45, 45, 0.1)',
          },
          '@media (hover: none)': {
            // 2 specificity againts MUI styles
            '&&:hover': {
              borderColor: '#FF2D2D',
              backgroundColor: 'rgba(255, 45, 45, 0.1)',
            },
          },
        },
        textSecondary: {
          color: '#3EBA13',
          '&:hover': {
            backgroundColor: 'rgba(62, 186, 19, 0.1)',
          },
        },
        text: {
          fontWeight: 600,
        },
        startIcon: {
          marginLeft: '-8px',
        },
        endIcon: {
          marginRight: '-8px',
        },
        sizeSmall: {
          height: '32px',
        },
      },
      variants: [
        {
          props: { size: 'small' },
          style: {
            padding: '3px 9px',
            fontSize: '0.8125rem',
          },
        },
      ],
    },
    MuiCheckbox: {
      defaultProps: {
        // icon: <icons.CheckboxUnchecked />,
        // checkedIcon: <Box component={icons.CheckboxChecked} sx={{ color: '#3EBA13' }} />,
        // indeterminateIcon: <icons.CheckboxIndetemininate />,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          color: '#EBEEF0',
          transition: theme.transitions.create(['color']),
          '&:hover': {
            color: '#3EBA13',
          },
        }),
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          letterSpacing: '0px',
          fontSize: '16px',
          fontWeight: 400,
          textTransform: 'capitalize',
          '&$selected': {
            fontWeight: 600,
            color: '#288CCC',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#288CCC',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#EBEEF0',
          '&.Mui-checked': {
            color: '#3EBA13',
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          border: '1px solid #EBEEF0',
          borderRadius: '8px',
          boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          '&.ShowsStatsDetails': {
            '& .MuiPaper-root': {
              '@media screen and (max-width: 599.98px)': {
                margin: 0,
                maxHeight: '100%',
                height: '100%',
                borderRadius: 0,
              },
            },
          },
        },
        paper: {
          borderRadius: '6px',
          border: '1px solid #EBEEF0',
          boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#F7F8F9',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.MuiTableRow-hover:hover:not(.mui-row-selected)': {
            backgroundColor: 'rgba(0, 0, 0, 0.014)',
          },
          '&.MuiTableRow-hover.mui-row-selected:hover': {
            backgroundColor: 'rgba(40, 140, 204, 0.17)',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '16px 8px',
          border: 'none',
          borderBottom: 'none',
        },
        head: {
          fontWeight: 600,
          color: '#9A9A9A',
          '& .MuiButtonBase-root:not(.MuiCheckbox-root)': {
            fontWeight: 'inherit',
            color: 'inherit',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          '&.whiteTooltip': {
            width: '360px',
            maxWidth: 'calc(100vw - 32px)',
            padding: '8px 16px',
            fontSize: '12px',
            fontWeight: 400,
            border: '1px solid #EBEEF0',
            borderRadius: '8px',
            boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.08)',
            color: '#040E14',
            backgroundColor: '#fff',
            '& .MuiTooltip-arrow': {
              color: '#fff',
            },
          },
          '&.shortWidth': {
            width: '200px',
          },
        },
        popper: {
          '&[data-popper-placement*="bottom"] .MuiTooltip-arrow': {
            width: '3em',
            height: '1em',
            marginTop: '-1em',
            '&::before': {
              border: '1px solid #EBEEF0',
            },
          },
          '&[data-popper-placement*="top"] .MuiTooltip-arrow': {
            width: '3em',
            height: '1em',
            marginBottom: '-1em',
            '&::before': {
              border: '1px solid #EBEEF0',
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#040E14',
          fontWeight: '600',
          fontSize: '14px',
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        message: {
          width: '100%',
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        ul: {
          '& > li:first-of-type .MuiPaginationItem-root': {
            border: '1px solid #EBEEF0',
            marginRight: '8px',
            '@media (max-width:375px)': {
              marginRight: '3px',
            },
          },
          '& > li:last-of-type > .MuiPaginationItem-root': {
            border: '1px solid #EBEEF0',
            marginLeft: '8px',
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          minWidth: '34px',
          height: '34px',
          borderRadius: '8px',
          padding: 0,
          fontSize: '14px',
          fontWeight: 600,
          color: '#7E7E7E',
          margin: 0,
          '&.Mui-selected': {
            background: 'rgba(62, 186, 19, 0.08)',
            color: '#3EBA13',
            '&:hover, &:focus': {
              background: 'rgba(62, 186, 19, 0.08)',
              color: '#3EBA13',
            },
          },
          '&.MuiPaginationItem-ellipsis': {
            lineHeight: 2.5,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {},
        outlined: {
          '&.MuiChip-colorWarning': {
            borderColor: '#FF9900',
            color: '#FF9900',
            backgroundColor: '#FF99000A',
          },
          '&.MuiChip-colorSuccess': {
            borderColor: '#3EBA13',
            color: '#3EBA13',
            backgroundColor: '#3EBA130A',
          },
          '&.MuiChip-colorError': {
            borderColor: '#FF4242',
            color: '#FF4242',
            backgroundColor: '#FF42420A',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#288ccc',
    },
    secondary: {
      main: '#0763e5',
    },
    text: {
      primary: '#040E14',
      secondary: '#7E7E7E',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1350,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});
