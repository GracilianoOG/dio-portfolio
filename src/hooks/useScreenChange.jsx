import { useEffect, useState } from "react";
import { devices } from "../utils/breakpoints";

function useScreenChange() {
  const [isMobile, setIsMobile] = useState(
    !window.matchMedia(devices.lg).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(devices.lg);
    const handleScreenChange = () => setIsMobile(!mediaQueryList.matches);
    mediaQueryList.addEventListener("change", handleScreenChange);

    return () =>
      mediaQueryList.removeEventListener("change", handleScreenChange);
  }, []);

  return isMobile;
}

export default useScreenChange;
