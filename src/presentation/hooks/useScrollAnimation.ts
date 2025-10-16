import { useState, useEffect, useCallback } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<Element | null>(null);

  const setElementRef = useCallback((element: Element | null) => {
    setRef(element);
  }, []);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(ref);

    return () => {
      observer.unobserve(ref);
    };
  }, [ref, threshold, rootMargin]);

  return {
    isVisible,
    ref: setElementRef
  };
};

// Hook para animaciones de scroll con múltiples elementos
export const useScrollAnimations = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  const observeElement = useCallback((id: string, element: Element | null) => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisibleElements(prev => {
          const newSet = new Set(prev);
          if (entry.isIntersecting) {
            newSet.add(id);
          } else {
            newSet.delete(id);
          }
          return newSet;
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  const isVisible = useCallback((id: string) => {
    return visibleElements.has(id);
  }, [visibleElements]);

  return {
    observeElement,
    isVisible
  };
};