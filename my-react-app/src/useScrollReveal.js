import { useEffect, useRef, useState } from "react";

// CUSTOM HOOK: watches one element and reports whether it has
// scrolled into view yet. Any component can call this to animate
// itself in when the user scrolls to it.
function useScrollReveal() {
  const ref = useRef(null); // a reference to the actual DOM element
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // IntersectionObserver watches ref.current and fires a callback
    // whenever it enters or leaves the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // stop watching once it's shown once
        }
      },
      { threshold: 0.15 } // fires when 15% of the element is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect(); // cleanup
  }, []);

  return { ref, isVisible };
}

export default useScrollReveal;