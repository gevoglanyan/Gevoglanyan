import { useEffect, useRef } from "react";

const Trail = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const points = useRef([]);
  const animId = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      points.current.push({
        x: e.clientX,
        y: e.clientY,
        alpha: 0.4,
        size: 3 + Math.random() * 2,
      });
    };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.current.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${p.alpha})`;
        ctx.shadowColor = "rgba(6, 182, 212, 0.4)";
        ctx.shadowBlur = 8;
        ctx.fill();
        p.alpha -= 0.015;
        p.size *= 0.97;
      });

      points.current = points.current.filter((p) => p.alpha > 0);
      animId.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      if (animId.current) cancelAnimationFrame(animId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[5]"
    />
  );
};

export default Trail;