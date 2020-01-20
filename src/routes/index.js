import {
  compose,
  lazy,
  map,
  mount,
  redirect,
  resolve,
  route,
  withContext,
  withView,
} from 'navi'
import React from 'react'
import { join } from 'path'
import { chunk, fromPairs } from 'lodash'
import BlogIndexPage from '../components/BlogIndexPage'
import BlogLayout from '../components/BlogLayout'
import BlogPostLayout from '../components/BlogPostLayout'
import siteMetadata from '../siteMetadata'
import posts from './posts'

// Split the posts into a list of chunks of the given size, and
// then build index pages for each chunk.
// console.log(siteMetadata)


let mapObj = function (pageNumber,postsCollection){
    return map(async (req, context) => {
    // Don't load anything when just crawling
    if (req.method === 'HEAD') {
      return route()
    } 
    // Get metadata for all pages on this page
    let postRoutes = await Promise.all(
      postsCollection.map(async post => {
        let href = '/'+post.slug.split('/')[1];

        return await resolve({
          // If you want to show the page content on the index page, set this to 'GET' to be able to access it.
          method: 'HEAD',
          routes,
        url: href,
        })
      }),
    )
    // Only add a page number to the page title after the first index page.
    let pageTitle = siteMetadata.title ; if (pageNumber > 0) {pageTitle += ` – page ${pageNumber + 1}`};
    let pageCount = Math.ceil(posts.length / postsPerPage);
    return route({
      title: pageTitle,
      view: (
        <BlogIndexPage
          blogRoot={context.blogRoot}
          pageNumber={pageNumber + 1}
          pageCount={pageCount}
          postRoutes={postRoutes}
        />
      ),
    })
  })
}

let postsPerPage = chunk(posts, siteMetadata.indexPageSize)
//splits the posts into groups

let indexPageRoutes = postsPerPage.map((postsCollection, pageNumber) => [
  '/' + (pageNumber + 1),
  mapObj(pageNumber,postsCollection),
])

//each page gets a number of posts
//                    pg1                  pg2                   pg3
//[                     [] ,                [],                   []       ]
//[  [{slug:,getPage:}..{}],  [{slug:,getPage:}..{}] ,[{slug:,getPage:}..{}]  ]
//ends up like [[ {slug: "2020-01-14/test-post", getPage: ƒ} , ...{}], ]
console.log(indexPageRoutes)


const postNames = posts.map(x=>x.slug);
var x = []
// x will be [{'postTitle':post.getPage} , {} , {}]

for (var i=0; i<postNames.length;i++){
  var n = compose(
    withView((req, context) => (
      <BlogPostLayout blogRoot={context.blogRoot} />
      )),
      withContext((req, context) => ({
      ...context,
      // blogRoot: req.mountpath || '/',
      blogRoot: '/',
    })),
    mount({'/':posts[i].getPage})
  )
  var key = `/${postNames[i].split('/')[1]}`;
  x.push([key,n])
}


var routes = compose(
  withContext((req, context) => ({
    ...context,
    blogRoot: req.mountpath || '/',
  })),
  withView((req, context) => {
    // Check if the current page is an index page by comparing the remaining
    // portion of the URL's pathname with the index page paths.
    let isViewingIndex = req.path === '/' || /^\/page\/\d+$/.test(req.path)

    // Render the application-wide layout
    return (
      <BlogLayout blogRoot={context.blogRoot} isViewingIndex={isViewingIndex} />
    )
  }),
  mount({
    // The blog's index pages go here. The first index page is mapped to the
    // root URL, with a redirect from "/page/1". Subsequent index pages are
    // mapped to "/page/n".
    '/': indexPageRoutes.shift()[1],
    ...fromPairs(x),
    '/page': mount({
      '/1': redirect((req, context) => context.blogRoot),
      ...fromPairs(indexPageRoutes),
    }),

    // Miscellaneous pages can be added directly to the root switch.
    '/tags': lazy(() => import('./tags')),
    '/about': lazy(() => import('./about')),
    '/test': lazy(() => import('./test')),
    

    // Only the statically built copy of the RSS feed is intended to be opened,
    // but the route is defined here so that the static renderer will pick it up.
    '/rss': route(),
  }),
)

// routes = compose(routes);


export default routes
