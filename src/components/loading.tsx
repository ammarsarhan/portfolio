import { useEffect } from "react"
import gsap, { Power4 } from "gsap";
import { useLenis } from "lenis/react";

export default function Loading({ progress } : { progress: number }) {
    const lenis = useLenis();

    useEffect(() => {
        const target = 'div.loading-container > div:first-child > div > span > span';
        const tl = gsap.timeline();

        tl.to(target, {
            duration: 0.5,
            opacity: 0,
            stagger: 0.15,
            ease: Power4.easeInOut
        })

        tl.to(target, {
            duration: 0.5,
            opacity: 1,
            stagger: 0.15,
            ease: Power4.easeInOut
        })

        tl.repeat(-1);
    }, [])

    useEffect(() => {
        if (progress === 100) {
            const tl = gsap.timeline({ 
                onComplete: () => { 
                    document.documentElement.style.overflow = 'auto';
                    lenis?.start();
                } 
            });

            tl.to('div.loading-container > div:first-child', {
                duration: 0.5,
                opacity: 0,
                ease: Power4.easeInOut
            });

            tl.to('div.loading-cols > div', {
                duration: 2,
                stagger: 0.2,
                ease: Power4.easeInOut,
                height: 0
            });
            
            tl.to('div.loading-container', {
                duration: 0,
                display: 'none',
                opacity: 0
            });
        }
    }, [progress])

    return (
        <div className="fixed top-0 left-0 z-50 w-full h-screen loading-container">
            <div className="flex-center w-full h-full fixed top-0 left-0 text-white">
                <div className="flex flex-col text-center">
                    <span className="text-lg">
                        <span>s</span>
                        <span>a</span>
                        <span>r</span>
                        <span>h</span>
                        <span>a</span>
                        <span>n</span>
                        <span>.</span>
                        <span>s</span>
                        <span>t</span>
                        <span>u</span>
                        <span>d</span>
                        <span>i</span>
                        <span>o</span>
                    </span>
                    <span>{progress}%</span>
                </div>
            </div>
            <div className="flex w-full h-full loading-cols">
                <div className="h-full w-1/8 bg-blue-800"></div>
                <div className="h-full w-1/8 bg-blue-800"></div>
                <div className="h-full w-1/8 bg-blue-800"></div>
                <div className="h-full w-1/8 bg-blue-800"></div>
                <div className="h-full w-1/8 bg-blue-800"></div>
                <div className="h-full w-1/8 bg-blue-800"></div>
                <div className="h-full w-1/8 bg-blue-800"></div>
                <div className="h-full w-1/8 bg-blue-800"></div>
            </div>
        </div>
    )
}