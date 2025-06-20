/**
 * General helper functions for VoiceAI platform
 */

import { STORAGE_KEYS } from './constants';

import type { Result } from '@/types';

// Check if running in browser
export const isBrowser = typeof window !== 'undefined';

// Get auth token from local storage
export function getAuthToken(): string | null {
  if (!isBrowser) return null;
  return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
}

// Set auth token in local storage
export function setAuthToken(token: string): void {
  if (isBrowser) {
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  }
}

// Remove auth token from local storage
export function removeAuthToken(): void {
  if (isBrowser) {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  }
}

// Handle API response
export function handleApiResponse<T>(response: Response): Promise<Result<T>> {
  return response.json()
    .then((data: T & { message?: string; error?: unknown; details?: unknown }) => {
      if (response.ok) {
        return { success: true as const, data } as Result<T>;
      } else {
        return { 
          success: false as const, 
          error: {
            statusCode: response.status,
            message: (data && (data as unknown as { message?: string }).message) || 'An error occurred',
            error: (data && (data as unknown as { error?: unknown }).error),
            details: (data && (data as unknown as { details?: unknown }).details),
            timestamp: new Date(),
          }
        } as Result<T>;
      }
    })
    .catch(() => ({
      success: false as const,
      error: {
        statusCode: 500,
        message: 'Failed to parse response',
        error: 'parse_error',
        timestamp: new Date(),
      },
    } as Result<T>));
}

// Debounce function
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// Generate unique ID
export function generateId(prefix = 'id'): string {
  return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
}

// Deep clone object
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

// Check if object is empty
export function isEmpty(obj: Record<string, unknown>): boolean {
  return Object.keys(obj).length === 0;
}

// Sleep helper
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}