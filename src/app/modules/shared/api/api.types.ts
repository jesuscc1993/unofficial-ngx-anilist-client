import { HttpClient } from '@angular/common/http';

export type RequestSettings = {
  cacheKey?: string;
  cacheMaxAge?: number;
  headers?: Record<string, string>;
};

export type RequestOptions = Parameters<HttpClient['post']>[2];
