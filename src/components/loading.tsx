import { useEffect } from "react"
import gsap, { Power4 } from "gsap";

export default function Loading({ progress } : { progress: number }) {
    useEffect(() => {
        if (progress === 100) {
            const tl = gsap.timeline();

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
                <p className="text-center">Hello from sarhan.studio! <br/> {progress}%</p>
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