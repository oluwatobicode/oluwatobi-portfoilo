import { useEffect, useState } from "react";

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let x = 0,
      y = 0;
    let targetX = 0,
      targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const followMouse = () => {
      x += (targetX - x) * 0.1;
      y += (targetY - y) * 0.1;
      setPosition({ x, y });
      requestAnimationFrame(followMouse);
    };

    window.addEventListener("mousemove", handleMouseMove);
    followMouse();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-3 h-3 bg-indigo-500 rounded-full pointer-events-none mix-blend-difference transition-transform duration-150 ease-out z-[9999]"
      style={{
        transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
      }}
    />
  );
}
