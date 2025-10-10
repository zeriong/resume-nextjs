import { create } from "zustand";
import { devtools } from "zustand/middleware";

/**
 * 토스트알림에 대한 상태관리 store
 *
 * @description 토스트를 활용할 때 문자열 뿐만 아닌 html태그를 직접 넣어서 별도의 스타일도 추가 가능
 * @example
 * const { addToast } = useToastStore;
 * addToast('토스트!');
 * addToast(<div className="text-red-500">빨간 글자 토스트!</div>);
 */
export const useToastStore = create(
  devtools((setState) => ({
    toasts: [],
    addToast: Object.assign(
      (message) => {
        setState((state) => {
          return { toasts: [...state.toasts, { message: message, type: "success" }] };
        });
      },
      {
        success: (message) => {
          setState((state) => {
            return { toasts: [...state.toasts, { message: message, type: "success" }] };
          });
        },
        warn: (message) => {
          setState((state) => {
            return { toasts: [...state.toasts, { message: message, type: "warn" }] };
          });
        },
        error: (message) => {
          setState((state) => {
            return { toasts: [...state.toasts, { message: message, type: "error" }] };
          });
        },
        custom: (message) => {
          setState((state) => {
            return { toasts: [...state.toasts, { message: message, type: "custom" }] };
          });
        },
      },
    ),
    setToast: (messages) => {
      setState(() => {
        return { toasts: messages };
      });
    },
    removeToast: () =>
      setState((state) => {
        state.toasts.shift();
        return { toasts: [...state.toasts] };
      }),
    removeDuplicates: () => {
      setState((state) => {
        const convert = new Set(state.toasts);
        return { toasts: Array.from(convert) };
      });
    },
  })),
);
