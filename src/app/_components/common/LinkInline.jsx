import { twMerge } from "tailwind-merge";

/**
 * @param {{
 *  href: string,
 *  target?: string,
 *  children: React.ReactNode,
 *  className?: string,
 *  isNoStyle?: boolean,
 * }} props
 */
export const LinkInline = ({
  href = "/",
  target = "_blank",
  children,
  className,
  isNoStyle,
}) => {
  return (
    <a
      href={href}
      target={target}
      className={
        !isNoStyle && twMerge("text-primary font-medium underline", className)
      }
    >
      {children}
    </a>
  );
};
