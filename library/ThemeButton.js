import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function useThemeFromLocalStorage() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if ("theme" in localStorage) {
      setIsDark(localStorage.getItem("theme") === "dark");
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, []);

  return [isDark, setIsDark];
}

function useToggleTheme(isDark) {
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    if (isDark) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
}

export default function ThemeButton({}) {
  const [isThemeDark, setDarkTheme] = useThemeFromLocalStorage();
  useToggleTheme(isThemeDark);

  return (
    <button
      onClick={() => setDarkTheme((isDark) => !isDark)}
      className="flex items-center justify-between border-2 border-solid dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-900 dark:hover:border-gray-800 rounded-md w-20 px-3 py-1"
    >
      {isThemeDark ? (
        <FontAwesomeIcon className="text-yellow-200" icon={faSun} size="1x" />
      ) : (
        <FontAwesomeIcon className="text-blue-700" icon={faMoon} size="1x" />
      )}
      <span className="font-sans text-sm font-medium text-blue-700 dark:text-yellow-200">
        {isThemeDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}
