import { useEffect, useState } from "react";

const ThemeBtn = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";

    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  return (
    <label className="relative inline-flex items-center cursor-pointer justify-center">
      <input
        className="sr-only peer"
        type="checkbox"
        name="themeBtn"
        checked={
          theme === "dark" ? true : theme === "light" ? false : undefined
        }
        onChange={toggleTheme}
      />
      <div className="w-15 h-7 rounded-full bg-[#090D1F] peer-checked:bg-white transition-all duration-500 after:content-['☀️'] after:absolute after:top-1 after:left-1 after:bg-white peer-checked:after:bg-[#090D1F] after:rounded-full after:h-5 after:w-5 after:text-sm after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-8 peer-checked:after:content-['🌙'] after:shadow-md" />
    </label>
  );
};

export default ThemeBtn;
