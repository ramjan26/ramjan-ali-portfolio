"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

type AnimationKey = "landingPerson" | "codingPerson" | "build";

type Props = {
  source: AnimationKey;
  className?: string;
  priority?: boolean;
};

const animationImports: Record<
  AnimationKey,
  () => Promise<{ default: object }>
> = {
  landingPerson: () => import("../lib/animations/landingPerson.json"),
  codingPerson: () => import("../lib/animations/codingPerson.json"),
  build: () => import("../lib/animations/build.json"),
};

export default function AnimatedLottie({
  source,
  className,
  priority = false,
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(priority);
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    if (active || !hostRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "240px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(hostRef.current);

    return () => observer.disconnect();
  }, [active]);

  useEffect(() => {
    if (!active || animationData) return;

    let cancelled = false;

    animationImports[source]()
      .then((module) => {
        if (!cancelled) {
          setAnimationData(module.default);
        }
      })
      .catch((error) => {
        console.error(`Failed to load Lottie animation: ${source}`, error);
      });

    return () => {
      cancelled = true;
    };
  }, [active, animationData, source]);

  return (
    <div
      ref={hostRef}
      className="animated-lottie-host"
      aria-hidden="true"
    >
      {active && animationData ? (
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className={className}
        />
      ) : null}
    </div>
  );
}