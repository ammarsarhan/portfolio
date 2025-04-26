import { useEffect, useState } from "react";

export default function useMouseMove(target: HTMLElement | null) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [track, setTrack] = useState(false);
  const [direction, setDirection] = useState<"top" | "bottom">("top");
  
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!target) return;

    let id: number;

    const updatePosition = (x: number, y: number) => {
      const rect = target.getBoundingClientRect();
      const inside =
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom;

      if (inside) {
        setTrack(true);
        setPosition({
          x: x - rect.left,
          y: y - rect.top,
        });
      } else {
        setTrack(false);
        const middleY = rect.top + rect.height / 2;
        setDirection(y < middleY ? "top" : "bottom");
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      if (id) cancelAnimationFrame(id);
      id = requestAnimationFrame(() => {
        updatePosition(e.clientX, e.clientY);
      });
    };

    const handleScrollOrResize = () => {
      if (id) cancelAnimationFrame(id);
      id = requestAnimationFrame(() => {
        updatePosition(mouse.x, mouse.y);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScrollOrResize, true);
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScrollOrResize, true);
      window.removeEventListener("resize", handleScrollOrResize);
      if (id) cancelAnimationFrame(id);
    };
  }, [target, mouse.x, mouse.y]);

  return { x: position.x, y: position.y, track, direction };
}
