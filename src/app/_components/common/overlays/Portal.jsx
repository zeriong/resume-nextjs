"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @returns
 */
export const Portal = ({ children }) => {
  const portalRootRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // ============= 포탈 루트 요소 찾아 등록 후 렌더링 =============
  useEffect(() => {
    portalRootRef.current = document.getElementById("portal-root");
    if (portalRootRef.current) {
      setIsMounted(true);
    }
  }, []);

  return isMounted && createPortal(children, portalRootRef.current);
};

export default Portal;
