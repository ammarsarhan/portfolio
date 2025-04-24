import { useEffect, useState } from "react";

export default function useMouseMove(target: HTMLElement | null) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [track, setTrack] = useState(false);
  const [direction, setDirection] = useState<"top" | "bottom">("top");

  useEffect(() => {
    if (!target) return;

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
        } else if (e.clientY > middleY) {
          setDirection("bottom");
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [target]);

  return { x: position.x, y: position.y, track, direction };
}
