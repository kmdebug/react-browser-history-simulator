export function toAbsoluteURL(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return '';
  if (!/^[a-zA-Z]+:\/\//.test(trimmed)) return `https://${trimmed}`;
  return trimmed;
}
