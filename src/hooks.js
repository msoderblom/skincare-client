import { useEffect } from "react";

export const useOnClickOutside = (ref, handler, btnID) => {
  useEffect(() => {
    const listener = (event) => {
      const targetParent = event.target.parentNode;

      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        targetParent.id === btnID ||
        event.target.id === btnID
      ) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
