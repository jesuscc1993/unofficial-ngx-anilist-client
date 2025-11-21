const CACHE_NAME = 'custom-cache';

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  const cacheKey = url.searchParams.get('customCacheKey');
  const maxAgeParam = url.searchParams.get('customCacheMaxAge');
  const maxAge = maxAgeParam ? parseInt(maxAgeParam, 10) * 1000 : null;

  if (!cacheKey || maxAgeParam === null) {
    return event.respondWith(fetch(req));
  }

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedEntry = await cache.match(cacheKey);

      if (cachedEntry) {
        const metadata = await cachedEntry.json().catch(() => null);
        if (
          metadata &&
          (maxAge < 0 || Date.now() - metadata.timestamp < maxAge)
        ) {
          console.log('Returning cached response for key:', cacheKey);
          return new Response(JSON.stringify(metadata.data), {
            headers: { 'Content-Type': 'application/json' },
          });
        }
      }

      const res = await fetch(req);
      if (res.status < 400) {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          return res;
        }

        const metadata = { timestamp: Date.now(), data };
        try {
          await cache.put(
            cacheKey,
            new Response(JSON.stringify(metadata), {
              headers: { 'Content-Type': 'application/json' },
            })
          );
        } catch {
          console.warn('Failed to cache response for key:', cacheKey);
        }
      }

      console.warn('Failed to get cache response for key:', cacheKey);
      return res;
    })()
  );
});
