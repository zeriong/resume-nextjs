import "@/app/globals.css";
import localFont from "next/font/local";

// ? 메타데이터 상수
const META_OBJ = {
  TITLE: "전제룡 - 포트폴리오",
  DESCRIPTION:
    "UX와 DX를 지향하며, 폭넓은 개발 경험으로 문제의 본질을 정확히 파악하고 빠른 이터레이션 속에서도 높은 완성도를 실현합니다.",
};

export const metadata = {
  title: META_OBJ.TITLE,
  description: META_OBJ.DESCRIPTION,
  metadataBase: new URL("https://portfolio.zeriong.com/"),
  openGraph: {
    title: META_OBJ.TITLE,
    description: META_OBJ.DESCRIPTION,
    images: ["/cover.jpg?v=1"],
  },
  twitter: {
    card: "summary",
    creator: "@argentinux",
    images: ["/cover.jpg?v=1"],
  },
  robots: {
    index: false, // <meta name="robots" content="noindex" />
  },
};

const pretendard = localFont({
  src: "../assets/fonts/pretendard/PretendardVariable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-pretendard",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
