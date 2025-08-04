import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function SectionRouteObserver({ id, route, children }) {
  const ref = useRef();
  const router = useRouter();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          router.replace(route, undefined, { shallow: true });
        }
      },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [route, router]);

  return (
    <section id={id} ref={ref}>
      {children}
    </section>
  );
}
