// Paste inside CONFIG in src/constants.js (e.g. right after `skills: { ... },`).
// While `posts` is empty, the section and its nav link stay hidden.
//
// How to get a post's id: on LinkedIn, open the post -> three dots -> "Embed this post"
// -> copy the iframe `src`. Paste either the whole src URL, or just the urn at the end
// (e.g. "urn:li:share:7123456789012345678" or "urn:li:ugcPost:7123456789012345678").
// Optional per post: { urn, height: 640 } if a long post gets cut off (default height is 476).
  featured: {
    title: "Featured posts",
    description: "A few things I've shared on LinkedIn.",
    posts: [
      // "urn:li:share:XXXXXXXXXXXXXXXXXXX",
      // { urn: "urn:li:ugcPost:XXXXXXXXXXXXXXXXXXX", height: 640 },
    ],
  },
