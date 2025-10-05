"use client";

import { useEffect, useRef } from "react";
import { useWindowResize } from "@/app/_hooks/useWindowResize";

export default function CircleAnimate() {
  const COLOR = ["#f9454b", "#f1d787", "#16a184", "#5a91fe"];

  const canvasRef = useRef(null);
  const drawInterval = useRef(null);
  const shapeArray = useRef([]);

  const [width] = useWindowResize();

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  };

  const draw = (canvas, ctx) => {
    if (canvas && ctx) {
      // 초기화
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 백그라운드 색상 지정
      ctx.fillStyle = "#f1f3fa";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 도형 움직임
      for (const circle of shapeArray.current) {
        circle.x += circle.dx;
        circle.y += circle.dy;

        // 캔버스 모서리에 부딪히면 반대 방향으로 동작
        if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
          circle.dx = -circle.dx;
        }
        if (
          circle.y + circle.radius > canvas.height ||
          circle.y - circle.radius < 0
        ) {
          circle.dy = -circle.dy;
        }

        // 그리고 지우며 애니메이션 구현
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = circle.color;
        ctx.fill();
        ctx.closePath();
      }
    }
  };

  const initCanvas = () => {
    if (!canvasRef.current) return;
    resizeCanvas();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const shapeCount = 6 + Math.floor(canvas.width / 300);

    const randomSpeed = (speed = 1) => {
      return speed * Math.random() - speed / 2;
    };

    shapeArray.current = [];
    // 작은 구형 생성
    for (let i = 0; i < shapeCount; i++) {
      const x = 20 + Math.random() * (canvas.width - 40);
      const y = 20 + Math.random() * (canvas.height - 40);
      const dx = randomSpeed();
      const dy = randomSpeed();
      const radius = 12 + Math.random() * 16;
      const color = COLOR[Math.floor(Math.random() * COLOR.length)]; // Randomly pick a color
      shapeArray.current.push({ x, y, dx, dy, radius, color });
    }
    // 큰 구형 별도 추가
    shapeArray.current.push({
      x: canvas.width * 0.2,
      y: canvas.height * 0.2,
      dx: randomSpeed(),
      dy: randomSpeed(),
      radius: canvas.height * 0.2,
      color: "#5a91fe",
    });
    shapeArray.current.push({
      x: canvas.width * 0.8,
      y: canvas.height * 0.8,
      dx: randomSpeed(),
      dy: randomSpeed(),
      radius: canvas.height * 0.15,
      color: "#16a184",
    });

    if (drawInterval.current != null) {
      clearInterval(drawInterval.current);
      drawInterval.current = null;
    }
    drawInterval.current = setInterval(() => {
      draw(canvas, ctx);
    }, 1000 / 16);
  };

  useEffect(() => {
    initCanvas();
  }, []);

  useEffect(() => {
    // 리사이즈시 재 렌더링
    resizeCanvas();
  }, [width]);

  return <canvas ref={canvasRef} className="absolute w-full h-full z-0"></canvas>;
}
