export type OAuth2TokenResponse = {
  access_token: string;
  expires_in: number;
};

export type LimitOffsetPaginationMeta = {
  limit: number;
  offset: number;
  total: number;
};

/**
 * Metadata in API responses indicating the pagination state.
 */
export type ScrollOffsetPaginationMeta = {
  limit: number;
  offset: string;
  expires_at: number;
  total: number;
};

export type ResponseMeta = {
  trace_id: string;
  pagination?: LimitOffsetPaginationMeta | ScrollOffsetPaginationMeta;
};

export type ResponseError = {
  code: number;
  message: string;
};

export type ResourcesResponse<T> = {
  meta: ResponseMeta;
  errors: ResponseError[];
  resources: T[];
};

/**
 * The identifier of a discovered device within the CrowdStrike Falcon platform.
 */
export type DeviceIdentifier = string;

/**
 * A detected device.
 */
export type Device = {
  device_id: DeviceIdentifier;
  [camelProperty: string]: string | object | Array<string | object>;
};
