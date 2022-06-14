export function fetcher(url: string, header: Headers) {
  return fetch(url, {
    headers: header,
  }).then((response) => response.json());
}

export default fetcher;

export function checkStatusOK(status: number) {
  return status >= 200 && status <= 299;
}
