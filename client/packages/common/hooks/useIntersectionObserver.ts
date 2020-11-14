import React from 'react';

type Props = {
  root?: React.RefObject<HTMLElement>;
  target: React.RefObject<HTMLElement>;
  onIntersect: Function;
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
};

export function useIntersectionObserver({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '100px',
  enabled = true,
}: Props) {
  React.useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        root: root && root.current,
        rootMargin,
        threshold,
      }
    );

    const el = target && target.current;

    if (!el) {
      return;
    }

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [target.current, enabled]);
}
