import gsap from "gsap";
import barba from "@barba/core";

export const pageTransition = () => {
  const body = document.body;

  const layerOut = () =>
    gsap.to(".Transition__Layer", {
      force3D: true,
      scaleY: 1,
      duration: 0.8,
      ease: "sine.in",
      transformOrigin: "center bottom",
    });

  const layerIn = () => {
    gsap.to(".Transition__Layer", {
      force3D: true,
      scaleY: 0,
      duration: 1,
      ease: "power1.out",
      transformOrigin: "center top",
    });
  };

  barba.init({
    transitions: [
      {
        async leave() {
          body.style.overflow = "hidden";
          // data.current.container.add('TransitionIn')
          await layerOut();
        },
        async enter() {
          body.toggleAttribute("style");
          window.scrollTo(0, 0);
          await layerIn();
        },
      },
    ],
  });
};
