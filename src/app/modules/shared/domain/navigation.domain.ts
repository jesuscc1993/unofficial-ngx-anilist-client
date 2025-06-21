import { ActivatedRoute, Params } from '@angular/router';

export const getTypedRouteParams = <T = Params>(
  activatedRoute: ActivatedRoute
): T => {
  return getTypedParams<T>(activatedRoute.snapshot.params);
};

export const getTypedQueryParams = <T = Params>(
  activatedRoute: ActivatedRoute
): T => {
  return getTypedParams<T>(activatedRoute.snapshot.queryParams);
};

export const getTypedParams = <T = Params>(params: Params): T => {
  return params as T;
};
