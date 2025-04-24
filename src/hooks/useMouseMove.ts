import { useEffect, useState } from "react";

export default function useMouseMove(target: HTMLElement | null) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [track, setTrack] = useState(false);
  const [direction, setDirection] = useState<"top" | "bottom">("top");

  useEffect(() => {
    if (!target) {
      console.log("No target element provided/found");
      return;
    };

    console.log("Target element found:", target);

    let id: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = target.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (inside) {
        setTrack(true);
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      } else {
        setTrack(false);
        const middleY = rect.top + rect.height / 2;
        if (e.clientY < middleY) {
          setDirection("top");
        } else {
          setDirection("bottom");
        }
      }
    };

    const handleRaf = (e: MouseEvent) => {
      if (id) cancelAnimationFrame(id);
      id = requestAnimationFrame(() => handleMouseMove(e));
    };

    window.addEventListener("mousemove", handleRaf);

    return () => {
      window.removeEventListener("mousemove", handleRaf);
      if (id) cancelAnimationFrame(id);
    };
  }, [target]);

  return { x: position.x, y: position.y, track, direction };
}
