"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type VideoHTMLAttributes,
} from "react";

type LazyVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src"> & {
  src: string;
  rootMargin?: string;
};

const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(
  ({ src, rootMargin = "300px", ...props }, forwardedRef) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useImperativeHandle(forwardedRef, () => videoRef.current as HTMLVideoElement);

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      if (!("IntersectionObserver" in window)) {
        setShouldLoad(true);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        },
        { rootMargin }
      );

      observer.observe(video);
      return () => observer.disconnect();
    }, [rootMargin]);

    return (
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        preload="none"
        {...props}
      />
    );
  }
);

LazyVideo.displayName = "LazyVideo";

export default LazyVideo;
