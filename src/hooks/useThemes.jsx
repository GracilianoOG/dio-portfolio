import { useEffect, useState } from "react";

const getTheme = () => {
  const localTheme = localStorage.getItem("theme");
  const darkMedia = "(prefers-color-scheme: dark)";
  const systemTheme = matchMedia(darkMedia).matches ? "dark" : "light";
  return localTheme ?? systemTheme;
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
