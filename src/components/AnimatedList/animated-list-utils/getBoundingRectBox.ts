import { MutableRefObject } from 'react';

function getBoundingRectBox<T extends { userID: string }[]>(
  items: T,
  itemsRefs: MutableRefObject<Record<string, HTMLLIElement>>
) {
  const boundingBoxes: Record<string, DOMRect> = {};

  items.forEach((child) => {
    if (child) {
      const domNode = itemsRefs.current[child.userID];
      const nodeBoundingBox = domNode.getBoundingClientRect();

      boundingBoxes[child.userID] = nodeBoundingBox;
    }
  });

  return boundingBoxes;
}

export default getBoundingRectBox;
