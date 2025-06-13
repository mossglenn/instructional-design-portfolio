export const fieldOrder = [
  {
    group: 'course',
    showFields: [],
    hideFields: [
      { key: 'title', label: 'Title' },
      { key: 'owner', label: 'Owner' },
      { key: 'audience', label: 'Audience' },
      { key: 'type', label: 'Type' },
      { key: 'format', label: 'Format' },
      { key: 'releaseDate', label: 'Release Date' },
      { key: 'partners', label: 'Partners' },
      { key: 'summary', label: 'Summary' },
      { key: 'subject', label: 'Subject' },
      { key: 'structure', label: 'Structure' },
      { key: 'delivery', label: 'Delivery' },
    ],
  },
  {
    group: 'design',
    showFields: [],
    hideFields: [
      { key: 'myRole', label: 'My Role' },
      { key: 'tools', label: 'Tools' },
      { key: 'designStrategy', label: 'Design Strategy' },
      { key: 'timeline', label: 'Timeline' },
      { key: 'accessibility', label: 'Accessibility' },
      { key: 'analytics', label: 'Analytics' },
    ],
  },
] as const;
