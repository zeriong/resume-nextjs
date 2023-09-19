import Head from "next/head";
import {useEffect, useRef, useState} from 'react';
import {useWindowResize} from '@/hooks/useWindowResize';

/**
 * 페이지를 감싸는 레이아웃 컴포넌트
 * SEO 데이터 설정
 *
 * @param title - 페이지 타이틀
 * @param description - 페이지 설명
 * @param {React.ReactNode} children - 하위 노드
 * */
export const Layout = ({ title, description = '안녕하세요, 전제룡입니다.', children }) => {
    const canvasRef = useRef(null);
    const [width] = useWindowResize();

    const shapeArray = useRef([]);
    const drawInterval = useRef(null)
    const colors = [ '#f9454b', '#f1d787', '#16a184', '#5a91fe'];

    const initCanvas = () => {
        resizeCanvas();

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const shapeCount = 6 + Math.floor(canvas.width / 300);

        const randomSpeed = (speed = 1) => {
            return (speed * Math.random()) - (speed / 2);
        }

        shapeArray.current = [];
        // 작은 구형 생성
        for (let i = 0; i < shapeCount; i++) {
            const x = 20 + Math.random() * (canvas.width - 40);
            const y = 20 + Math.random() * (canvas.height - 40);
            const dx = randomSpeed();
            const dy = randomSpeed();
            const radius = 12 + (Math.random() * 16);
            const color = colors[Math.floor(Math.random() * colors.length)]; // Randomly pick a color
            shapeArray.current.push({ x, y, dx, dy, radius, color });
        }
        // 큰 구형 별도 추가
        shapeArray.current.push({ x: canvas.width * 0.20, y: canvas.height * 0.20 , dx: randomSpeed(), dy: randomSpeed(), radius: canvas.height * 0.20, color: '#5a91fe' });
        shapeArray.current.push({ x: canvas.width * 0.80, y: canvas.height * 0.80, dx: randomSpeed(), dy: randomSpeed(), radius: canvas.height * 0.15, color: '#16a184' });

        if (drawInterval.current != null) {
            clearInterval(drawInterval.current);
            drawInterval.current = null;
        }
        drawInterval.current = setInterval(() => {
            draw(canvas, ctx);
        }, 1000 / 16);
    }

    const resizeCanvas = () => {
        const canvas = canvasRef.current
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
            ctx.fillStyle = '#f1f3fa';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // 도형 움직임
            for (const circle of shapeArray.current) {
                circle.x += circle.dx;
                circle.y += circle.dy;

                // 캔버스 모서리에 부딪히면 반대 방향으로 동작
                if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
                    circle.dx = -circle.dx;
                }
                if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
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
    }

    useEffect(() => {
        initCanvas();
    }, []);

    useEffect(() => {
        // 리사이즈시 재 렌더링
        resizeCanvas();
    }, [width]);

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="robots" content="noindex"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content={description}/>

                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta property="og:image" content="/cover.jpg"/>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:creator" content="@argentinux"/>

                <title>{title}</title>
            </Head>
            <div className="relative w-full h-full">
                <canvas ref={canvasRef} className="absolute w-full h-full z-0"></canvas>
                <div className="absolute flex justify-center w-full h-full px-3 overflow-y-scroll z-10">
                    <div className="relative w-full max-w-[1080px] h-full">
                        <main
                            className="flex flex-col backdrop-blur-[10px] bg-white bg-opacity-[85%] border-x border-gray-300/90 px-[80px] py-[64px] gap-y-[68px]
                            max-sm:p-[24px_16px] max-lg:p-[32px_28px] max-lg:gap-y-[48px]"
                        >
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}