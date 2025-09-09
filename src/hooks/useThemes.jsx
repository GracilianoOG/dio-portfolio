import { useEffect, useState } from "react";

const getTheme = () => {
  let loadedTheme = localStorage.getItem("theme");
  if (!loadedTheme) {
    const darkMedia = "(prefers-color-scheme: dark)";
    loadedTheme = matchMedia(darkMedia).matches ? "dark" : "light";
  }
  return loadedTheme;
};

function useThemes() {
  const [theme, setTheme] = useState(getTheme);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme === "dark", toggleTheme];
}

export default useThemes;
