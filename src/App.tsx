import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { TestPage } from "./components/test/TestPage";
import HomePage from "./pages/HomePage";
import { Layout } from "./layout/Layout";
import { FaqPage } from "./pages/FaqPage";
import { LanguagesPage } from "./pages/LanguagesPage";
import { ResultsPage } from "./components/results/ResultsPage";
import { TermsOfService } from "./pages/TermsOfService";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/F&Q"
        element={
          <Layout>
            <FaqPage />
          </Layout>
        }
      />
      <Route
        path="/languages"
        element={
          <Layout>
            <LanguagesPage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <AboutPage />
          </Layout>
        }
      />
      <Route
        path="/terms-conditions"
        element={
          <Layout>
            <TermsOfService />
          </Layout>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <Layout>
            <PrivacyPolicy />
          </Layout>
        }
      />
      <Route
        path="/results"
        element={
          <Layout>
            <ResultsPage />
          </Layout>
        }
      />
      <Route
        path="/test"
        element={
          <Layout>
            <TestPage />
          </Layout>
        }
      />
    </Routes>
  </Router>
);

export default App;
