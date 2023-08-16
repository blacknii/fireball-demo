import { CssBaseline, Stack } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/main-content/MainContent";
import { useMeteoriteData } from "./hooks/useMeteoriteData";

function App() {
  const data = useMeteoriteData();
  console.log({ data });

  return (
    <Stack minHeight="100vh" sx={{ display: "flex", alignItems: "stretch" }}>
      <CssBaseline />
      <Header />
      <MainContent />
      <Footer />
    </Stack>
  );
}

export default App;
