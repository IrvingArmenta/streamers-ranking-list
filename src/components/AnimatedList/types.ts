import { HTMLAttributes } from 'react';

export type AnimatedListProps<T> = {
  items: T[];
  renderItem: (item: T | null) => React.ReactNode;
  itemsExpectedLength: number;
} & HTMLAttributes<HTMLOListElement>;
