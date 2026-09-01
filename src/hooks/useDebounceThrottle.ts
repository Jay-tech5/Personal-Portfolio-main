/**
 * Debounce hook - delays function execution until specified time has passed without calls
 */
export function useDebounce<T extends (...args: unknown[]) => void>(
  callback: T,
  delayMs: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delayMs);
  };
}

/**
 * Throttle hook - limits function execution to once per specified time interval
 */
export function useThrottle<T extends (...args: unknown[]) => void>(
  callback: T,
  delayMs: number
): (...args: Parameters<T>) => void {
  let lastCallTime = 0;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCallTime >= delayMs) {
      callback(...args);
      lastCallTime = now;
    }
  };
}
