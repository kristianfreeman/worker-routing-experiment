import { createRouter, handleRoute } from './setupRouter'

const index = () => {
  return `INDEX`
}

const showPosts = () => {
  return `SHOW POSTS`
}

const editPost = params => {
  return "EDIT POST"
}

const showPost = params => {
  return `SHOW POST: ${JSON.stringify(params)}`
}

const newPost = params => {
  return 'NEW POST'
}

const routes = [
  { path: "/", handler: index },
  { path: "/posts", handler: showPosts },
  { path: "/posts/edit", handler: editPost },
  { path: "/posts/:id", handler: showPost },
  { path: "/posts/new", handler: newPost }
]

export { handleRoute }
export default createRouter(routes)
