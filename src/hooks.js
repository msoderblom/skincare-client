import { useState, useEffect } from "react";

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
  }, [ref, handler, btnID]);
};

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

/* This hook is copied from https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs*/
export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
