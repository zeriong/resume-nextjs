"use client";

import { useEffect, useRef, useState } from "react";

export const useWindowResize = () => {
  const [size, setSize] = useState([0, 0]);
  let timer = useRef(null);

  const updateSize = () => {
    if (timer.current != null) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    if (timer.current == null) {
      timer.current = setTimeout(() => {
        setSize([window.innerWidth, window.innerHeight]);
      }, 300);
    }
  };

  useEffect(() => {
    setSize([window.innerWidth, window.innerHeight]);

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return size;
};
