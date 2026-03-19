export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  if (url.pathname.endsWith('.php')) {
    return sendRedirect(event, `/phap-quyen`, 301)
  }
})
