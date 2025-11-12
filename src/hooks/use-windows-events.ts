import { useEffect } from "react";

interface WindowEvent {
  eventName: keyof WindowEventMap;
  handler: (event: Event) => void;
}

export const useWindowEvents = (events: WindowEvent[]) => {
  useEffect(() => {
    events.forEach(({ eventName, handler }) => {
      window.addEventListener(eventName, handler);
    });

    return () => {
      events.forEach(({ eventName, handler }) => {
        window.removeEventListener(eventName, handler);
      });
    };
  }, [events]);
};