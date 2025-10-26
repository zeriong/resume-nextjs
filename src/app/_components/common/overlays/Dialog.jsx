"use client";

import Portal from "@/app/_components/common/overlays/Portal";

/**
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @returns
 */
export const Dialog = ({ children }) => {
  return (
    <Portal>
      <dialog className="fixed inset-0 bg-black/50 flex items-center justify-center">
        {children}
      </dialog>
    </Portal>
  );
};

export default Dialog;
