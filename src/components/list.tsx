import { ReactNode, useEffect, useRef } from "react";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ListItem({
  title,
  description,
  items,
  index,
}: {
  title: string;
  description: string;
  items: string[];
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const indexRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !indexRef.current) return;

    ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 75%",
        end: "top 25%",
        onEnter: () => {
            gsap.to(indexRef.current, {
                backgroundColor: "black",
                color: "white",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                duration: 0.5,
                ease: Power4.easeInOut,
            });
        },
        onEnterBack: () => {
            gsap.to(indexRef.current, {
                backgroundColor: "black",
                color: "white",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                duration: 0.5,
                ease: Power4.easeInOut,
            });
        },
        onLeave: () => {
            gsap.to(indexRef.current, {
                backgroundColor: "rgb(240, 240, 240)",
                color: "black",
                paddingLeft: "0.25rem",
                paddingRight: "0.25rem",
                duration: 0.5,
                ease: Power4.easeInOut,
            });
        },
        onLeaveBack: () => {
            gsap.to(indexRef.current, {
                backgroundColor: "rgb(240, 240, 240)",
                color: "black",
                paddingLeft: "0.25rem",
                paddingRight: "0.25rem",
                duration: 0.5,
                ease: Power4.easeInOut,
            });
        }
    });
  }, []);

  return (
    <div ref={containerRef}>
      <div
        className="w-full px-1 py-2 rounded-sm border-b-[1px]"
        ref={indexRef}
      >
        <span className="text-2xl font-medium">0{index}</span>
      </div>
      <div className="relative flex justify-between pt-8 pb-4 h-72">
        <div>
          <h2 className="text-4xl font-medium mb-6">{title}</h2>
          <p className="w-96">{description}</p>
        </div>
        <div>
          <ul className="text-right w-96">
            {items.map((item, idx) => (
              <li key={idx} className="text-2xl">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function List({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-y-4">{children}</div>;
}
