"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev != 100) {
          return prev + 1;
        }
        return prev;
      });
    }, duration / 100);

    setTimeout(() => {
      clearInterval(interval);
    }, duration);
  }, []);

  return (
    <>
      {isLoading && <Loading progress={progress}/> }
      <div className="m-8">
        <header>
          <div className="flex gap-x-16">
            <div className="flex flex-col gap-y-8 w-fit">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-blue-900"></div>
                <div className="w-16 h-16 rounded-full bg-blue-800 -mx-3"></div>
                <div className="relative w-16 h-16 rounded-full bg-blue-700">
                  <span className="absolute top-1.5 left-1/2 -translate-x-1/2 text-white text-4xl">س</span>
                </div>
              </div>
              <p className="w-80 text-sm">We empower small businesses by creating strong online web presences at affordable rates while providing top-notch SEO optimization, captivating design, and impeccable user experience.</p>
            </div>
            <div className="flex items-end flex-1">
              <h1 className="text-6xl">sarhan.studio - Elevating brands through exquisite web architecture and user experience.</h1>
              <span className="text-sm text-nowrap">(scroll down)</span>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
