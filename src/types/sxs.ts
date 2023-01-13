import { SxProps } from '@mui/system';
import { theme } from '@styles';

export type SxTheme = SxProps<typeof theme>;

export type Sxs<T extends string> = Partial<Record<T, SxTheme>>;
