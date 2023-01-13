import { SxTheme } from './sxs';

export type IndexedSxType = {
  [key: string]: SxTheme;
};

export const AsSxObject = <T extends IndexedSxType>(arg: T): T => arg;
