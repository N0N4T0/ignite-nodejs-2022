export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-z]+)/g;
  const patWithParams = path.replaceAll(
    routeParametersRegex,
    "(?<$1>[a-z0-9\\-_]+)"
  );

  const pathRegex = new RegExp(`^${patWithParams}(?<query>\\?(.*))?$`);

  return pathRegex;
}
