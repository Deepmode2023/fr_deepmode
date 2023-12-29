export const concat_url_path =
  (basic_path: string) =>
  (...args: string[]): string =>
    basic_path.concat("/", args.join("/"));
