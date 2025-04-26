"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Loading from "@/components/loading";
import { SectionLabel } from "@/components/labels";
import List, { ListItem } from "@/components/list";
import Cursor from "@/components/cursor";
import useMouseMove from "@/hooks/useMouseMove";

export default function Home() {
  const trackable = useRef(null);
  const [progress, setProgress] = useState(0);

  const { x, y, track, direction } = useMouseMove(trackable.current);

  useEffect(() => {
    if (trackable.current) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <>
      {<Loading progress={progress}/>}
      <div className="flex flex-col gap-y-20 m-8">
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
        <section>
          <SectionLabel label="Who are we?" index={1} />
          <div className="my-6">
            <div className="w-full h-[25rem] flex flex-col gap-y-4 items-end justify-center px-8 rounded-md plasma text-white text-sm">
              <span className="text-8xl mb-3">سَرْحَان</span>
              <span>/sarˈħɑːn/ noun</span>
              <p className="text-sm font-medium w-80 text-right">From Arabic سَرْحَان — someone mentally drifting; used to describe being lost in a trance of deep thought.</p>
            </div>
            <div className="relative grid grid-rows-[auto_auto_auto_auto] grid-cols-2 mt-14 gap-y-16 gap-x-4" ref={trackable}>
              <Cursor x={x} y={y} track={track} exit={direction}>
                <Link className={`rounded-full px-4 py-2 ${track ? "bg-black text-white" : "bg-gray-300"}`} href={"/mission"}>
                  <span className="text-sm text-nowrap">Learn More →</span>
                </Link>
              </Cursor>
              <h2 className="text-6xl col-start-1 row-start-1">We are a small team that specializes in creating digital experiences that breathe with intuition and beauty.</h2>
              <h2 className="text-6xl col-start-2 row-start-2">*A global creative studio that blends dreamlike design with precision engineering to build web experiences that move, breathe, and connect.</h2>
              <h2 className="text-6xl col-start-1 row-start-3">With a team size of 5 core members and a trusted circle of global collaborators, we scale with purpose and partner with impact.</h2>
              <h2 className="text-6xl col-start-2 row-start-4">We believe the web isn&apos;t just a place to visit. Our work lives in that sweet spot between art and utility, where people don&apos;t just interact — they connect.</h2>
            </div>
          </div>
        </section>
        <section>
          <SectionLabel label="Curation process" index={2} />
          <div className="my-6">
            <List>
              <ListItem
                title="Researching"
                description="At sarhan.studio, we believe that thoughtful design begins long before a mockup. Every project starts with deep research — because building a meaningful digital experience requires more than just visuals. It requires understanding."
                items={['Discovering Your Brand', 'Understanding The Audience', 'Analyzing the Landscape', 'Clarifying the Message', 'Visual Research & Moodboards', 'Technical Exploration']}
                index={1}
              />
              <ListItem
                title="Designing"
                description="With research as our foundation, the design phase is where vision starts to take shape. This is where we turn insights into interfaces — crafting digital experiences that are not only functional, but emotionally resonant."
                items={['Wireframing & UX Design', 'UI Design & Visual Language', 'Responsive & Accessibility-First Thinking', 'Microinteractions & Motion Design', 'Design Systems & Consistency', 'Collaborative Feedback & Iteration']}
                index={2}
              />
              <ListItem
                title="Developing"
                description="With design locked in, we bring ideas to life through thoughtful, high-performance code. The development phase is where creativity meets engineering — transforming static designs into seamless, scalable digital products."
                items={['Frontend Development, Reimagined', 'Responsive by Default', 'Microinteractions & Motion', 'Design Systems & Reusability', 'Performance & Accessibility', '*Backend Implementation', '*CMS Integration']}
                index={3}
              />
              <ListItem
                title="Deploying"
                description="The final step of our journey is bringing your digital experience into the real world. We take care of every technical detail to ensure a seamless launch — so you can confidently go live, knowing your site is fast, secure, and reliable."
                items={['Pre-Launch Optimization', 'Security & Compliance', 'Environment Setup & Hosting', 'CI/CD Integration', 'Final Testing & Verification']}
                index={4}
              />
            </List>
          </div>
        </section>
        <section className="flex flex-col gap-y-8">
          <SectionLabel label="Case studies" index={3}/>
          <div className="grid grid-cols-2 grid-rows-[auto_auto_auto_auto] gap-4">
            <div className="w-full h-[60vh] plasma">

            </div>
            <div></div>
            <div className="w-full h-[60vh] plasma">

            </div>
            <div className="w-full h-[60vh] plasma">

            </div>
            <div></div>
            <div className="w-full h-[60vh] plasma">

            </div>
            <div className="w-full h-[60vh] plasma">
              
            </div>
            <div></div>
          </div>
        </section>
        <section className="flex flex-col gap-y-8">
          <SectionLabel label="Wanna work with us?" index={4}/>
        </section>
      </div>
    </>
  );
}
