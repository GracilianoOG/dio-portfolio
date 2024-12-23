import { useEffect, useState } from "react";

function useThemePreference() {
  const [isDark, setIsDark] = useState(false);

  const handleDarkState = () => {
    setIsDark(!isDark);
    localStorage.setItem("dark-theme", !isDark);
  };

  useEffect(() => {
    const isDarkEnabled = (
      localStorage.getItem("dark-theme") ??
      matchMedia("(prefers-color-scheme: dark)").matches
    ).toString();

    setIsDark(isDarkEnabled === "true");
  }, []);

  return [isDark, handleDarkState];
}

export default useThemePreference;
