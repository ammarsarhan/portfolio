import { ReactNode, useEffect, useRef, useState } from "react";

export default function Cursor({ children, x, y, track, exit }: { children: ReactNode, x: number, y: number, track: boolean, exit: "top" | "bottom" }) {
    const inst = useRef(null);

    const [top, setTop] = useState<string | number>(0);
    const [left, setLeft] = useState<string | number>("auto");
    const [right, setRight] = useState<string | number>(0);
    const [bottom, setBottom] = useState<string | number>("auto");

    useEffect(() => {
        const update = () => {
          switch (exit) {
            case "top":
              setTop(track ? y : 0);
              setLeft(track ? x : "auto");
              setRight(track ? "auto" : 0);
              setBottom(track ? "auto" : 0);
              break;
            case "bottom":
              setTop(track ? y : "auto");
              setLeft(track ? x : 0);
              setBottom(track ? "auto" : 0);
              setRight("auto");
              break;
          }
        };
      
        update();
      }, [exit, track, x, y]);

    return (
        <div 
            ref={inst}
            style={{
                position: "absolute",
                cursor: "none",
                transform: track ? "translate(-50%, -50%)" : "translate(0, 0)",
                zIndex: 40,
                top,
                left,
                right,
                bottom
            }}
        >
            {children}
        </div>
    )
}