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

      // Create main pinned horizontal timeline
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
            snapTo: [0, 1/9, 2/9, 3/9, 4/9, 5/9, 6/9, 7/9, 8/9, 1],
            duration: { min: 0.15, max: 0.4 },
            delay: 0.05,
            ease: "power2.out"
          }
        }
      });

      // Part 1: Translate panels 1, 2, 3 to Panel 4 (Hero, About, Services -> Projects)
      // Translates x from 0 to -300vw over duration 3
      tl.to(container, {
        x: "-300vw",
        duration: 3,
        ease: "none"
      }, 0);

      // Part 2: Translate panels 5, 6, 7 (Skills, Resume, Contact)
      // Translates x from -300vw to -600vw over duration 3 (starting at time 6)
      tl.to(container, {
        x: "-600vw",
        duration: 3,
        ease: "none"
      }, 6);

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

      // Projects stacked slide fades (Panel 4)
      // We fade slides 0 to 3 in and out at timelines 3 to 6.
      // At start (time 3): Slide 0 is active.
      // 3 to 4: Slide 0 fades out, Slide 1 fades in.
      tl.to(".project-slide-0", { opacity: 0, duration: 0.4, ease: "power1.inOut" }, 3.3);
      tl.to(".project-slide-1", { opacity: 1, duration: 0.4, ease: "power1.inOut" }, 3.3);

      // 4 to 5: Slide 1 fades out, Slide 2 fades in.
      tl.to(".project-slide-1", { opacity: 0, duration: 0.4, ease: "power1.inOut" }, 4.3);
      tl.to(".project-slide-2", { opacity: 1, duration: 0.4, ease: "power1.inOut" }, 4.3);

      // 5 to 6: Slide 2 fades out, Slide 3 fades in.
      tl.to(".project-slide-2", { opacity: 0, duration: 0.4, ease: "power1.inOut" }, 5.3);
      tl.to(".project-slide-3", { opacity: 1, duration: 0.4, ease: "power1.inOut" }, 5.3);

      // Projects numbers progress indicator
      tl.to(".proj-num-01", { color: "#84a98c", opacity: 1, duration: 0.1 }, 0);
      
      tl.to(".proj-num-01", { color: "#354f52", opacity: 0.3, duration: 0.2 }, 3.3);
      tl.to(".proj-num-02", { color: "#84a98c", opacity: 1, duration: 0.2 }, 3.3);

      tl.to(".proj-num-02", { color: "#354f52", opacity: 0.3, duration: 0.2 }, 4.3);
      tl.to(".proj-num-03", { color: "#84a98c", opacity: 1, duration: 0.2 }, 4.3);

      tl.to(".proj-num-03", { color: "#354f52", opacity: 0.3, duration: 0.2 }, 5.3);
      tl.to(".proj-num-04", { color: "#84a98c", opacity: 1, duration: 0.2 }, 5.3);

    }, triggerRef);

    // Refresh ScrollTrigger to ensure correct metrics
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [isLoading]);

  return { containerRef, triggerRef };
};

export default useHorizontalScroll;
