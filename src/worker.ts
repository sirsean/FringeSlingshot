export default {
  async fetch(request, env, ctx) {
    // First try to match a static asset in the bucket
    return env.ASSETS.fetch(request)
      .then(res => {
        // If asset not found, fall back to SPA entry point
        if (res.status === 404 && request.method === 'GET') {
          const url = new URL(request.url)
          url.pathname = '/index.html'
          return env.ASSETS.fetch(new Request(url, request))
        }
        return res
      })
  }
}
