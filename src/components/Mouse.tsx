import { useEffect, useRef } from "react";

const Mouse = () => {
  const mouseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!mouseRef.current) return;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      mouseRef.current.style.top = mouseY + "px";
      mouseRef.current.style.left = mouseX + "px";
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseRef])

  return (
    <div className="mouse-wrapper">
      <div ref={mouseRef} className="mouse">
        <div className="point" />
      </div>
    </div>
  );
}

export default Mouse;
