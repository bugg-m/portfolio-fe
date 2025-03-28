import { NotifyError } from '../components/notify/notify';

interface SetLocalStorageProps<T> {
  name: string;
  value: T;
}

/**
 * Stores a value in localStorage with error handling
 * @param name The key to store the value under
 * @param value The value to store
 * @returns boolean indicating success or failure
 */
const setLocalStorage = <T>({ name, value }: SetLocalStorageProps<T>): boolean => {
  try {
    const stringValue = JSON.stringify(value);
    localStorage.setItem(name, stringValue);
    return true;
  } catch (error) {
    console.error('Error setting localStorage item:', error);
    NotifyError('Failed to save data');
    return false;
  }
};

/**
 * Retrieves a value from localStorage
 * @param name The key to retrieve
 * @param showError Whether to show an error notification if not found
 * @returns The retrieved value or null if not found
 */
const getLocalStorage = <T>(name: string, showError = false): T | null => {
  try {
    const value = localStorage.getItem(name);
    if (!value) {
      if (showError) NotifyError('Item not found in local storage');
      return null;
    }
    return JSON.parse(value) as T;
  } catch (error) {
    console.error('Error getting localStorage item:', error);
    NotifyError('Failed to retrieve data');
    return null;
  }
};

export { getLocalStorage, setLocalStorage };
