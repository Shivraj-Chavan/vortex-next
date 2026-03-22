// "use client";

// import { Moon, Sun } from "lucide-react";
// import { useEffect, useState } from "react";

// const ThemeToggle = () => {
//   const [isDark, setIsDark] = useState(false);
//   const [mounted, setMounted] = useState(false);

 
//   useEffect(() => {
//     setMounted(true);

//     const savedTheme = localStorage.getItem("theme");
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     const theme = savedTheme ?? (prefersDark ? "dark" : "light");

//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//       setIsDark(true);
//     } else {
//       document.documentElement.classList.remove("dark");
//       setIsDark(false);
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = isDark ? "light" : "dark";

//     if (newTheme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }

//     localStorage.setItem("theme", newTheme);
//     setIsDark(!isDark);

    
//     window.dispatchEvent(
//       new CustomEvent("themechange", { detail: newTheme })
//     );
//   };

//   if (!mounted) return null;

//   return (
//     <button
//       onClick={toggleTheme}
//       aria-label="Toggle Theme"
//       className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition-transform duration-300"
//     >
//       {isDark ? (
//         <Sun size={18} className="text-yellow-400" />
//       ) : (
//         <Moon size={18} className="text-gray-700" />
//       )}
//     </button>
//   );
// };

// export default ThemeToggle;



"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition-transform duration-300"
    >
      {isDark ? (
        <Sun size={18} className="text-yellow-400" />
      ) : (
        <Moon size={18} className="text-gray-700" />
      )}
    </button>
  );
};

export default ThemeToggle;