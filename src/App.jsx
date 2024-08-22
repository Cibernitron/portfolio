import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import GlobalStyle from "./styles/GlobalStyle";
import PrivacyPolicy from "./pages/PrivacyPolicy ";
import Legal from "./pages/Legal";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
