import { useCallback, useEffect, useState } from "react";

export function useCarousel(length, interval = 6000) {
  const [index, setIndex] = useState(0);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + length) % length);
  }, [length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % length);
  }, [length]);

  useEffect(() => {
    if (length <= 1) return undefined;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [length, interval, next]);

  return { index, setIndex, prev, next };
}
