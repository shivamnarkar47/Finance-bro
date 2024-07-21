import { Button } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  console.log(theme)
  return (
    <div>
      <Button isIconOnly onClick={theme === "dark" ? () => setTheme('light') : () => setTheme('dark')} variant="light" >{theme == "light" ? <Sun strokeWidth={1} /> : <Moon strokeWidth={1} />}</Button>
    </div>
  )
}

export default ThemeSwitcher
