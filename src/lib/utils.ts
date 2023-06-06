import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const url =
  'https://random-data-api.com/api/v2/users?size=12&response_type=json';
export const placeholderUrl = 'https://jsonplaceholder.typicode.com/users/id';
