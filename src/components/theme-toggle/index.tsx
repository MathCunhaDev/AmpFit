import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { FloatingButton } from "./styles";
import { useTheme } from "../../hooks/useTheme";

export const ThemeToggle = () => {
  const theme = useTheme();

  return (
    <FloatingButton
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Switch
        checked={theme?.isDarkMode}
        onChange={theme?.toggleTheme}
        checkedChildren={<MoonOutlined />}
        unCheckedChildren={<SunOutlined />}
      />
    </FloatingButton>
  );
};
