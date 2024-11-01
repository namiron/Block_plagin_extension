const baseURL = "http://localhost:3000";

export const createInstance = async <T>({
  url,
  method,
  params,
  data,
  headers,
}: {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  params?: Record<string, string>;
  headers?: HeadersInit;
  data?: BodyType<unknown>;
  responseType?: string;
}): Promise<T> => {
  let targetUrl = `${baseURL}${url}`;

  if (params) {
    targetUrl += "?" + new URLSearchParams(params);
  }

  const response = await fetch(targetUrl, {
    method: method.toUpperCase(),
    credentials: "include",
    headers,
    ...(data ? { body: JSON.stringify(data) } : {}),
  });

  if (!response.status.toString().startsWith("2")) {
    throw new Error("Error");
  }

  return response.json();
};

export default createInstance;

export type ErrorType<Error> = Error;

export type BodyType<BodyData> = BodyData;
