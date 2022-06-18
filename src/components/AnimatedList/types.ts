import { HTMLAttributes } from 'react';

export type AnimatedListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
} & HTMLAttributes<HTMLOListElement>;
