import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useHorizontalScroll = (isLoading) => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    // Only initialize when loading is complete and DOM is fully mounted
    if (isLoading) return;

    const container = containerRef.current;
    const trigger = triggerRef.current;

    if (!container || !trigger) return;

    // Graceful degradation on mobile - do not initialize horizontal scroll
    if (window.innerWidth <= 768) return;

    let ctx = gsap.context(() => {
      // 7 panels, each 100vw.
      // Total translation distance is container.scrollWidth - window.innerWidth.
      // Since container has 7 panels, total width is 700vw, so translation is -600vw.
      const scrollAmount = -(container.scrollWidth - window.innerWidth);

      // Create main pinned horizontal timeline with 10 snapping points (0 to 10s duration)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${container.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          snap: {
            snapTo: [0, 0.1, 0.2, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
            duration: { min: 0.15, max: 0.4 },
            delay: 0.05,
            ease: "power2.out"
          }
        }
      });

      // Part 1: Translate panels 1 & 2 to Panel 3 (Hero, About -> Services)
      // Translates x from 0 to -200vw over duration 2
      tl.to(container, {
        x: "-200vw",
        duration: 2,
        ease: "none"
      }, 0);

      // Part 2: Translate from Services to Projects
      // Translates x from -200vw to -300vw over duration 1 (starting at time 4)
      tl.to(container, {
        x: "-300vw",
        duration: 1,
        ease: "none"
      }, 4);

      // Part 3: Translate from Projects to Skills, Resume, Contact
      // Translates x from -300vw to -600vw over duration 3 (starting at time 7)
      tl.to(container, {
        x: "-600vw",
        duration: 3,
        ease: "none"
      }, 7);

      // Inline Hero Portrait Parallax Animation
      // - Translates rightward slower than the container for horizontal parallax depth when exiting (0 to 1)
      const innerPortrait = document.getElementById('hero-portrait-inner');
      if (innerPortrait) {
        tl.to(innerPortrait, {
          xPercent: 25,
          ease: "none",
          duration: 1
        }, 0);
      }

      // Services (What I Build) Orbital Cards Assembly Scrub (time 2 to 4)
      const targets = [
        { x: "-38vw", y: "2vh" },
        { x: "-29vw", y: "20vh" },
        { x: "-25vw", y: "-22vh" },
        { x: "25vw", y: "-22vh" },
        { x: "29vw", y: "20vh" },
        { x: "38vw", y: "2vh" }
      ];

      for (let i = 0; i < 6; i++) {
        const startTime = 2.0 + i * 0.2;
        tl.fromTo(`.orbit-card-${i}`, 
          { 
            "--card-x": "0vw", 
            "--card-y": "80vh", 
            "--card-opacity": 0, 
            "--card-scale": 0.6 
          },
          { 
            "--card-x": targets[i].x, 
            "--card-y": targets[i].y, 
            "--card-opacity": 1, 
            "--card-scale": 1.0, 
            duration: 1.2, 
            ease: "power2.out" 
          },
          startTime
        );
      }

      // Services center content fade-in
      tl.fromTo(".services-center-content",
        { opacity: 0, scale: 0.75 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
        3.0
      );

      // Projects stacked slide fades (Panel 4) - Pauses at time 5 to 7
      tl.to(".project-slide-0", { opacity: 0, duration: 0.4, ease: "power1.inOut" }, 5.5);
      tl.to(".project-slide-1", { opacity: 1, duration: 0.4, ease: "power1.inOut" }, 5.5);

      tl.to(".project-slide-1", { opacity: 0, duration: 0.4, ease: "power1.inOut" }, 6.3);
      tl.to(".project-slide-2", { opacity: 1, duration: 0.4, ease: "power1.inOut" }, 6.3);

      // Projects numbers progress indicator (Shifted relative to time 5 to 7)
      tl.to(".proj-num-01", { color: "#84a98c", opacity: 1, duration: 0.1 }, 0);
      
      tl.to(".proj-num-01", { color: "#354f52", opacity: 0.3, duration: 0.2 }, 5.5);
      tl.to(".proj-num-02", { color: "#84a98c", opacity: 1, duration: 0.2 }, 5.5);

      tl.to(".proj-num-02", { color: "#354f52", opacity: 0.3, duration: 0.2 }, 6.3);
      tl.to(".proj-num-03", { color: "#84a98c", opacity: 1, duration: 0.2 }, 6.3);

    }, triggerRef);

    // Refresh ScrollTrigger to ensure correct metrics
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [isLoading]);

  return { containerRef, triggerRef };
};

export default useHorizontalScroll;
