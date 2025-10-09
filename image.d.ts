// ============================================
// 이미지 모듈 타입 선언
// Next.js는 이미지를 StaticImageData로 변환
// ============================================
declare module "*.jpg" {
    const content: import("next/image").StaticImageData;
    export default content;
  }
  
  declare module "*.jpeg" {
    const content: import("next/image").StaticImageData;
    export default content;
  }
  
  declare module "*.png" {
    const content: import("next/image").StaticImageData;
    export default content;
  }
  
  declare module "*.gif" {
    const content: import("next/image").StaticImageData;
    export default content;
  }
  
  declare module "*.webp" {
    const content: import("next/image").StaticImageData;
    export default content;
  }
  
  declare module "*.ico" {
    const content: string;
    export default content;
  }
  
  declare module "*.bmp" {
    const content: import("next/image").StaticImageData;
    export default content;
  }