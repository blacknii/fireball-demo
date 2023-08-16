import { CssBaseline, Stack } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/main-content/MainContent";

function App() {
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
