import RouteRecognizer from 'route-recognizer'

const handleRoute = (router, request) => {
  const url = new URL(request.url)
  const recognized = router.recognize(url.pathname)
  if (recognized && recognized.length) {
    const route = recognized[0]
    return new Response(route.handler(route.params))
  } else {
    return new Response("404 not found")
  }
}

const createRouter = routes => {
  const router = new RouteRecognizer();
  routes.forEach(route => router.add([route]))
  return router
}

export { createRouter, handleRoute }
