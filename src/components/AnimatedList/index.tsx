import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
import { getBoundingRectBox } from './animated-list-utils';
import { AnimatedListProps } from './types';
import { usePrev } from 'hooks';

import ErrorBoundary from 'components/ErrorBoundary';

const AnimatedList = <T extends { userID: string }>(
  props: AnimatedListProps<T>
) => {
  const { items, renderItem, itemsExpectedLength, ...rest } = props;

  const itemRefs = useRef<Record<string, HTMLLIElement>>({});
  const [boundingBox, setBoundingBox] = useState<Record<string, DOMRect>>({});
  const [prevBoundingBox, setPrevBoundingBox] = useState<
    Record<string, DOMRect>
  >({});

  const prevItems = usePrev(items);

  useLayoutEffect(() => {
    const newBoundingBox = getBoundingRectBox(items, itemRefs);
    setBoundingBox(newBoundingBox);
  }, [items]);

  useLayoutEffect(() => {
    const prevBoundingBox = getBoundingRectBox(items, itemRefs);
    setPrevBoundingBox(prevBoundingBox);
  }, [prevItems]);

  useEffect(() => {
    const prevBoundingBoxExists = Object.keys(prevBoundingBox).length;

    if (prevBoundingBoxExists) {
      items.forEach((item) => {
        const domNode = itemRefs.current[item.userID];
        const firstItemBox = prevBoundingBox[item.userID];
        const lastItemBox = boundingBox[item.userID];
        const changeY = firstItemBox.top - lastItemBox.top;

        if (changeY && domNode) {
          requestAnimationFrame(() => {
            domNode.style.willChange = 'transform';
            domNode.style.transform = `translateY(${changeY}px)`;
            domNode.style.transition = 'transform 0s ease-in-out';

            requestAnimationFrame(() => {
              domNode.style.transform = '';
              domNode.style.transition =
                'transform 300ms cubic-bezier(0.680, -0.550, 0.265, 1.550)';
            });
          });
        }
      });
    }
  }, [boundingBox, prevBoundingBox, items]);

  return (
    <ErrorBoundary>
      <ol {...rest}>
        {items.length
          ? items.map((item) => {
              const getRef = (el: HTMLLIElement) =>
                (itemRefs.current[item.userID] = el);

              return (
                <li key={item.userID} ref={getRef}>
                  {renderItem(item)}
                </li>
              );
            })
          : Array(itemsExpectedLength)
              .fill(null)
              .map((n, i) => <li key={i}>{renderItem(n)}</li>)}
      </ol>
    </ErrorBoundary>
  );
};

export default AnimatedList;
