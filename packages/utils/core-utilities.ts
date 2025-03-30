import { NotifyError } from '../components/notify/notify';

interface SetLocalStorageProps<T> {
  name: string;
  value: T;
  expiryTime?: '5s' | '1d' | '2d' | '3d' | '4d';
}

const time = {
  '5s': 5000,
  '1d': 86400000,
  '2d': 172800000,
  '3d': 345600000,
  '4d': 691200000,
};

/**
 * Stores a value in localStorage with error handling
 * @param name The key to store the value under
 * @param value The value to store
 * @param expiryTime The value to store
 * @returns boolean indicating success or failure
 */
const setLocalStorage = <T>({ name, value, expiryTime }: SetLocalStorageProps<T>): boolean => {
  try {
    let newValue = value;
    if (expiryTime) {
      newValue = {
        value,
        expiry: Date.now() + time[expiryTime],
      } as T;
    }
    console.log({ newValue });

    const stringValue = JSON.stringify(newValue);
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

    const newValue = JSON.parse(value);

    if (newValue?.expiry) {
      if (Date.now() > newValue?.expiry) {
        localStorage.removeItem(name);
        return null;
      } else {
        return newValue.value;
      }
    }
    return newValue;
  } catch (error) {
    console.error('Error getting localStorage item:', error);
    NotifyError('Failed to retrieve data');
    return null;
  }
};

export { getLocalStorage, setLocalStorage };
