import * as Navi from 'navi'
import BlogPostLayout from '../../components/BlogPostLayout'

export default Navi.route({
  title: "test",
  getView: () => import('./document.mdx'),
})