import importAll from 'import-all.macro'
import * as Navi from 'navi'
import { join } from 'path'
import { sortBy } from 'lodash'
import slugify from 'slugify'

// Get a list of all posts, that will not be loaded until the user
// requests them.
const postModules = importAll.deferred('./*/post.js')
const importPost = pathname => postModules[pathname]()
const postPathnames = Object.keys(postModules)
const datePattern = /^((\d{1,4})-(\d{1,4})-(\d{1,4}))[/-]/
let date;

let postDetails = postPathnames.map(pathname => {
  let slug = slugify(
    //the $ in the replacement string points to the group
    pathname.replace(/post.jsx?$/, '').replace(/(\d)\/(\d)/, '$1-$2'),
  )
    //remove starting or trailing '.' or '-'
    .replace(/^[-.]+|[.-]+$/g, '')
    //append a slash after the date
    .replace(datePattern, '$1/')
    // .split('/')[1]


  let dateMatch = slug.match(datePattern)
  if (dateMatch) {
    date = new Date(dateMatch[2], parseInt(dateMatch[3]) - 1, dateMatch[4])
  }

  return {
    slug,
    pathname,
    date,
  }
})

// Sort the pages by slug (which contain the dates)
postDetails = sortBy(postDetails, ['slug']).reverse()

// Create url-friendly slugs from post pathnames, and a `getPage()` function
// that can be used to load and return the post's Page object.
let posts = postDetails.map(({ slug, pathname, date }, i) => ({
  getPage: Navi.map(async () => {
    let { default: post } = await importPost(pathname)
    let { title, getContent, ...meta } = post
    let previousSlug, previousPost, nextSlug, nextPost

    if (i !== 0) {
      let previousPostDetails = postDetails[i - 1]
      previousPost = (await importPost(previousPostDetails.pathname)).default
      previousSlug = previousPostDetails.slug.split('/')[1]
    }

    if (i + 1 < postDetails.length) {
      let nextPostDetails = postDetails[i + 1]
      nextPost = (await importPost(nextPostDetails.pathname)).default
      nextSlug = nextPostDetails.slug.split('/')[1]
    }

    return Navi.route({
      title,
      getData: (req, context) => ({
        date,
        pathname,
        slug,
        previousDetails: previousPost && {
          title: previousPost.title,
          href: join(context.blogRoot,  previousSlug),
        },
        nextDetails: nextPost && {
          title: nextPost.title,
          href: join(context.blogRoot,  nextSlug),
        },
        ...meta,
      }),
      getView: async () => {
        let { default: MDXComponent, ...other } = await getContent()
        return { MDXComponent, ...other }
      },
    })
  }),
  slug,
}))

export default posts
