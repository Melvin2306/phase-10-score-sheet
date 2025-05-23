"use client";

import { useEffect, useRef, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // Use a ref to store the initialValue to avoid it triggering the effect
  const initialValueRef = useRef(initialValue);

  // Initialize the state
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      setStoredValue(item ? JSON.parse(item) : initialValueRef.current);
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      setStoredValue(initialValueRef.current);
    }
  }, [key]);

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      if (typeof window === "undefined") return;

      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Save state
      setStoredValue(valueToStore);

      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log("Error storing in localStorage:", error);
    }
  };

  return [storedValue, setValue] as const;
}
