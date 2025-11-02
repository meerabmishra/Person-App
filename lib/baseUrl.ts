export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return process.env.NEXTAUTH_URL || 'http://localhost:3000';
}