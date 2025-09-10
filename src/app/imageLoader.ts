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

  // Optimize quality based on width
  const optimizedQuality = width > 800 ? quality || 85 : quality || 75;

  return `${basePath}${src}?w=${width}&q=${optimizedQuality}`;
}
