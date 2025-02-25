import { ConfigProvider } from "antd";
import { ThemeProviderWrapper } from "./store/contexts/theme";
import { ReactQueryProvider } from "./store/providers/react-query";
import { Home } from "./pages/home";

function App() {
  return (
    <ReactQueryProvider>
      <ThemeProviderWrapper>
        <ConfigProvider>
          <Home />
        </ConfigProvider>
      </ThemeProviderWrapper>
    </ReactQueryProvider>
  );
}

export default App;
