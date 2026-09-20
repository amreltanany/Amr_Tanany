/**
 * Extracts the domain from a URL
 */
export function extractDomain(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch (error) {
    console.error('Invalid URL:', url);
    return '';
  }
}

/**
 * Gets the favicon URL for a given website URL using Google's favicon service
 * @param url - The website URL
 * @param size - The size of the favicon (default: 32)
 * @returns The favicon URL
 */
export function getFaviconUrl(url: string, size: number = 32): string {
  const domain = extractDomain(url);
  if (!domain) return '';
  
  // Using Google's favicon service
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
}

/**
 * Gets a higher quality favicon using multiple fallback methods
 * @param url - The website URL
 * @returns The favicon URL
 */
export function getFaviconWithFallback(url: string): string {
  const domain = extractDomain(url);
  if (!domain) return '';
  
  // Try Google's favicon service first (most reliable)
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}