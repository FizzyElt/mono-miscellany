type ApiPath = `api/${string}`;

type Resp<T, E> =
  | {
      statusCode: 200;
      status: 'success';
      content: T;
    }
  | {
      statusCode: number;
      status: 'error';
      error: E;
    };

export interface Fetch {
  <T, E, Q extends object>(apiPath: ApiPath): (query: Q) => Resp<T, E>;
  <T, E>(apiPath: ApiPath): () => Resp<T, E>;
}
