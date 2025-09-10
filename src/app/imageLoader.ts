export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const isGithubPages = process.env.GITHUB_ACTIONS === "true";
  const basePath = isGithubPages ? "/Auramatics" : "";

  return `${basePath}${src}?w=${width}&q=${quality || 75}`;
}
