export default {
  title: `New blog!`,
  tags: ['blogging', 'programming'],
  spoiler: "Created a new blog.",
  getContent: () => import('./document.mdx'),
}