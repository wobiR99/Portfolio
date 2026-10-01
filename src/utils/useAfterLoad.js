import { useEffect, useState } from "react";

// True once the page has finished loading and the browser is idle, so
// decorative work doesn't compete with the content for bandwidth or CPU.
export const useAfterLoad = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let idleId;
    const markReady = () => setReady(true);
    const scheduleIdle = () => {
      idleId =
        "requestIdleCallback" in window
          ? window.requestIdleCallback(markReady, { timeout: 2000 })
          : window.setTimeout(markReady, 200);
    };

    if (document.readyState === "complete") scheduleIdle();
    else window.addEventListener("load", scheduleIdle, { once: true });

    return () => {
      window.removeEventListener("load", scheduleIdle);
      if ("cancelIdleCallback" in window) window.cancelIdleCallback(idleId);
      else window.clearTimeout(idleId);
    };
  }, []);

  return ready;
};
