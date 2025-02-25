import { useContext } from "react";
import { ThemeContext } from "../store/contexts/theme";

export const useTheme = () => {
  return useContext(ThemeContext);
};
