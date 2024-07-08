import { useEffect, useRef, useState } from "react";

import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

/**
 * Hook to help with unmounting transition.
 */
export const useMountTransition = (
  isOpen: boolean,
  duration: number,
  onUnmountDone?: () => void,
) => {
  const [isMounted, setIsMounted] = useState(isOpen);

  // store in a ref to avoid having to add it to the deps array
  // (because we can’t guarantee stable reference)
  // if unstable and added to the dep array, the effect may run more times than necessary
  // so we simply store the latest callback in a ref
  const onUnmountDoneRef = useRef(onUnmountDone);
  useIsomorphicLayoutEffect(() => {
    onUnmountDoneRef.current = onUnmountDone;
  }, [onUnmountDone]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isOpen) {
      timeout = setTimeout(() => {
        setIsMounted(false);

        if (typeof onUnmountDoneRef.current === "function") {
          onUnmountDoneRef.current?.();
        }
      }, duration);
    } else {
      setIsMounted(true);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [duration, isOpen]);

  return {
    isMounted: isOpen || isMounted,
    isTransitioningOut: isMounted && !isOpen,
  };
};
