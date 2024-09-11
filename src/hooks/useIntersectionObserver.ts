import { RefObject, useEffect, useRef, useState } from "react";

type UseIntersectionObserverOptions = {
  once?: boolean;
  initialState?: boolean;
  onChange?: (isIntersecting: boolean) => void;
};

export const useIntersectionObserver = <T extends HTMLElement>(
  { initialState, onChange }: UseIntersectionObserverOptions = {
    initialState: false,
  }
): [RefObject<T>, boolean] => {
  const [isIntersecting, setInView] = useState(initialState ?? false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        setInView(isIntersecting);
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    onChange?.(isIntersecting);
  }, [isIntersecting]);

  return [ref, isIntersecting];
};
