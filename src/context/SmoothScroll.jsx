import gsap from "gsap";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef } from "react";

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 700);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis options={{ autoRaf: false }} ref={lenisRef} root>
      <>{children}</>
    </ReactLenis>
  );
};

export default SmoothScroll;
