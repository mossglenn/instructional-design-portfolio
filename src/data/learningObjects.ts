// src/data/learningObjects.ts
export interface LearningObject {
  id: string; // stable key, folder name-ish
  title: string; // display name
  path: string; // path under /public, e.g. "/learning-objects/escape-room/index.html"
  description?: string; // optional blurb for context in Results
  thumbnail: string; // path to thumbnail image
  thumbnailAlt: string; // alt text for thumbnail image
  defaultOpen?: boolean; // open this one inline on initial load (optional)
}

export const learningObjects: LearningObject[] = [
  {
    id: 'escape-room',
    title: 'Escape Room',
    path: '/learning-objects/escape-room-learning-activity/index.html',
    description:
      'Practice and learn complex statistics calculations to uncover the secret code that unlocks the door.',
    thumbnail: '/learning-objects/escape-room-learning-activity/thumbnail.png',
    thumbnailAlt: 'Escape Room Learning Activity Thumbnail',
    defaultOpen: false,
    },
      {
    id: 'stats-zoo',
    title: 'Zoo Treasure Hunt',
    path: '/learning-objects/stats-zoo-learning-activity/index.html',
    description:
      ' Practice and learn probability calculations by searching for a treasure hidden somewhere in the zoo.',
    thumbnail: '/learning-objects/stats-zoo-learning-activity/thumbnail.jpg',
    thumbnailAlt: 'Zoo Treasure Hunt Learning Activity Thumbnail',
    defaultOpen: false,
  },
  // Add more objects here in the order you want displayed
];
