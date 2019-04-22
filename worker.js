import router, { handleRoute } from './routes';

const handleRequest = request => handleRoute(router, request)

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

