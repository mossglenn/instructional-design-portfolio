import type {
  CustomGroup,
  Field,
  FieldKey,
  GroupEntry,
  GroupKey,
} from '@/types';
import { fieldOrder } from '@/data/courseFields';
export function createCustomGroup(
  showKeys?: FieldKey[],
  hideKeys?: FieldKey[],
): CustomGroup {
  const flatOrder = fieldOrder.flatMap((g) => [
    ...g.showFields,
    ...g.hideFields,
  ]);
  const customGroup: CustomGroup = {
    group: 'custom',
    showFields: [],
    hideFields: [],
  };
  if (showKeys) {
    customGroup.showFields = showKeys
      .map((key) => {
        return flatOrder.find((obj) => obj.key === key);
      })
      .filter((field) => field !== undefined) as Field[];
  }
  if (hideKeys) {
    customGroup.hideFields = hideKeys
      .map((key) => {
        return flatOrder.find((obj) => obj.key === key);
      })
      .filter((field) => field !== undefined) as Field[];
  }
  return customGroup;
}

export function resolveGroup(
  g: GroupKey,
  showKeys?: FieldKey[],
  hideKeys?: FieldKey[],
): GroupEntry {
  if (g === 'custom') {
    const custom = createCustomGroup(showKeys, hideKeys);
    return {
      group: 'custom',
      showFields: custom.showFields,
      hideFields: custom.hideFields,
    };
  }

  const found = fieldOrder.find((f) => f.group === g);
  if (!found) {
    console.warn(`Unknown group key: '${g}' — returning empty field lists.`);
    return {
      group: g,
      showFields: [],
      hideFields: [],
    };
  }
  return {
    group: g,
    showFields: [...found.showFields],
    hideFields: [...found?.hideFields],
  };
}
