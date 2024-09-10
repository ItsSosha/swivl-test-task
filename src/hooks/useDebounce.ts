import { useCallback, useEffect, useMemo, useRef } from "react";

export const useDebounce = <T extends (...args: any[]) => void>(
  callback: T,
  ms: number
): [T, () => void] => {
  const callbackRef = useRef(callback);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const cancel = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  const debounced = useMemo(() => {
    const caller = (...args: Parameters<T>) => {
      callbackRef.current(...args);
    };

    return (...args: Parameters<T>) => {
      cancel();
      timerRef.current = setTimeout(() => caller(...args), ms);
    };
  }, [cancel]) as T;

  return [debounced, cancel];
};
