import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useState, useEffect } from "react";

export default function ThemeButton() {
  const { resolvedTheme: theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <button
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
      className="flex items-center justify-between border-2 border-solid dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-900 dark:hover:border-gray-800 rounded-md w-20 px-3 py-1"
    >
      <FontAwesomeIcon
        className={clsx({
          "text-blue-700": !isDark,
          "text-yellow-200": isDark
        })}
        icon={isDark ? faSun : faMoon}
        size="1x"
      />
      <span className="font-sans text-sm font-medium text-blue-700 dark:text-yellow-200">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}
