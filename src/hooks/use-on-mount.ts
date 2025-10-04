import { useEffect, useRef } from "react";

export const useOnMount = (fn: () => void) => {
  const callBack = useRef(fn);

  useEffect(() => {
    callBack.current = fn;
  }, [fn]);

  useEffect(() => {
    callBack.current();
  }, []);
};