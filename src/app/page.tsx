"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/loading";
import { SectionLabel } from "@/components/labels";
import Link from "next/link";
import List, { ListItem } from "@/components/list";

export default function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000;

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
      <Loading progress={progress}/>
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
          <SectionLabel label="Who are we?" index={1}/>
          <div className="my-6">
            <div className="w-full h-96 flex flex-col gap-y-4 items-end justify-center px-8 rounded-md plasma text-white text-sm">
              <span className="text-8xl mb-3">سَرْحَان</span>
              <span>/sarˈħɑːn/ noun</span>
              <p className="text-sm font-medium w-80 text-right">From Arabic سَرْحَان — someone mentally drifting; used to describe being lost in a trance of deep thought.</p>
            </div>
            <div className="flex flex-wrap gap-8 justify-between mt-18">
              <div className="w-80">
                <h3 className="mb-2 font-medium">Origins</h3>
                <p className="text-sm"><span className="italic">sarhan.studio</span> started as an idea. What if we could take traditional websites, and turn them into beautiful, unique digital experiences that captivate the eye, while remaining accessible to the masses?</p>
              </div>
              <div className="w-80">
                <h3 className="mb-2 font-medium">Ideology</h3>
                <p className="text-sm">We do not build websites for the sake of functionality alone. We believe in building experiences that make people pause. We create digital spaces that make users feel like they&apos;re walking through a dream. Every scroll, every subtle animation, every word feels intentional—designed to gently pull them in.</p>
              </div>
              <div className="w-80">
                <p className="text-sm">In doing so, we manage to appeal to a wide range of consumers, while retaining the intended niche audience&apos;s attention. This in turn, helps small businesses grow and evolve into something beautiful.</p>
              </div>
              <div className="w-80 flex items-end justify-end">
                <Link href="/mission" className="text-sm text-blue-800 hover:underline">Read More →</Link>
              </div>
            </div>
          </div>
        </section>
        <section>
          <SectionLabel label="Curation process" index={2}/>
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
      </div>
    </>
  );
}
