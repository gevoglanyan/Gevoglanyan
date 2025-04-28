import { useEffect, useRef } from 'react';

const Trail = () => {
  const canvasRef = useRef(null);
  const isDragging = useRef(false);
  const points = useRef([]);

  useEffect(() => {
    if (window.innerWidth < 768) return;
  
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
  
    window.addEventListener('resize', handleResize);
  
    const handleMouseDown = () => {
      isDragging.current = true;
      document.body.classList.add('dragging-disable-selection');
    };
  
    const handleMouseUp = () => {
      isDragging.current = false;
      document.body.classList.remove('dragging-disable-selection');
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      points.current.push({
        x: e.clientX,
        y: e.clientY,
        alpha: 1,
      });
    };
  
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
  
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      points.current.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 8, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${point.alpha})`;
        ctx.shadowColor = 'rgb(255, 255, 255)';
        ctx.shadowBlur = 10;
        ctx.fill();
  
        point.alpha -= 0.02;
      });
  
      points.current = points.current.filter(p => p.alpha > 0);
  
      requestAnimationFrame(draw);
    };
  
    draw();
  
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.classList.remove('dragging-disable-selection');
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
    />
  );
};

export default Trail;
