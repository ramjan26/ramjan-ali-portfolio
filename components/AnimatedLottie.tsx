"use client";

import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef, useState } from "react";

type Props = {
  animationData: object;
  className?: string;
  priority?: boolean;
};

export default function AnimatedLottie({
  animationData,
  className,
  priority = false,
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [ready, setReady] = useState(priority);

  useEffect(() => {
    if (priority || ready || !hostRef.current) return;

    const node = hostRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "220px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [priority, ready]);

  useEffect(() => {
    if (!ready) return;

    // Explicitly start the animation after the Lottie instance is mounted.
    const frame = requestAnimationFrame(() => {
      lottieRef.current?.goToAndPlay(0, true);
    });

    return () => cancelAnimationFrame(frame);
  }, [ready, animationData]);

  return (
    <div
      ref={hostRef}
      className="animated-lottie-host"
      aria-hidden="true"
    >
      {ready ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={true}
          autoplay={true}
          className={className}
        />
      ) : null}
    </div>
  );
}