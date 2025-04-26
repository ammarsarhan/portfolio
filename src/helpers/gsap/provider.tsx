"use client";

import { ReactNode, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";


export default function ScrollProvider({ children } : { children: ReactNode }) {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = useLenis();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.style.overflow = 'hidden';
        lenis?.stop();
    }, [lenis]);

    return (
        <>
            {children}
        </>
    );
}