export function emphasizeAllOfUsText(text: string) {
  return text.replace(
    /\bAll of Us\b/g,
    '<span class="italic">All of Us</span>',
  );
}

export function emphasizeAllOfUs(
  content: string | any[] | Record<string, any>,
): string | any[] | Record<string, any> {
  if (typeof content === 'string') {
    return emphasizeAllOfUsText(content);
  } else if (Array.isArray(content)) {
    return content.map((item) =>
      typeof item === 'string'
        ? emphasizeAllOfUsText(item)
        : typeof item === 'object' && item !== null
        ? emphasizeAllOfUs(item)
        : item,
    );
  } else if (typeof content === 'object' && content !== null) {
    const result: Record<string, any> = {};
    for (const key in content) {
      const value = content[key];
      if (typeof value === 'string') {
        result[key] = emphasizeAllOfUsText(value);
      } else if (Array.isArray(value)) {
        result[key] = value.map((v) =>
          typeof v === 'string' ? emphasizeAllOfUsText(v) : v,
        );
      } else if (typeof value === 'object' && value !== null) {
        const nested: Record<string, any> = {};
        for (const nestedKey in value) {
          const nestedValue = value[nestedKey];
          nested[nestedKey] =
            typeof nestedValue === 'string'
              ? emphasizeAllOfUsText(nestedValue)
              : nestedValue;
        }
        result[key] = nested;
      } else {
        result[key] = value;
      }
    }
    return result;
  } else {
    return content;
  }
}
