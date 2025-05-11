export function getCmsUrl() {
  return process.env.CMS_BASE_URL || "http://localhost:1337";
}

export function getCmsApiKey() {
  return process.env.CMS_API_KEY;
}

export function getMediaUrl(url: string | null) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${getCmsUrl()}${url}`;
}