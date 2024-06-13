import { isEmpty } from "lodash";

const appendQueryParams = (
  path: string,
  queries: { [key: string]: any }
): string => {
  try {
    const params = new URLSearchParams();
    Object.keys(queries).forEach((key) => {
      params.set(key, queries[key]);
    });
    const newParams = params.toString();
    return `${path}?${newParams}`;
  } catch (e) {
    console.error(e);
    return path;
  }
};

export function generateApiUrl(
  url: string,
  data?: { [key: string]: any },
  queries?: { [key: string]: any }
) {
  let result = url;
  if (data)
    Object.keys(data).forEach((key) => {
      result = result.replace(
        new RegExp(`:${key}`, "g"),
        encodeURIComponent(data[key].toString())
      );
    });
  return !isEmpty(queries) ? appendQueryParams(result, queries) : result;
}
