import { HttpClient } from '@angular/common/http';
import { withCache } from '@ngneat/cashew';

type ContextOptions = NonNullable<Parameters<typeof withCache>[0]>;

export type RequestSettings = {
  cacheKey?: ContextOptions['key'];
  cacheMaxAge?: ContextOptions['ttl'];
  cacheStorage?: ContextOptions['storage'];
  headers?: Record<string, string>;
};

export type RequestOptions = Parameters<HttpClient['post']>[2];
