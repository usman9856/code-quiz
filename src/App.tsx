import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { TestPage } from "./components/test/TestPage";
import HomePage from "./pages/HomePage";
import { Layout } from "./layout/Layout";
import { FaqPage } from "./pages/FaqPage";
import { LanguagesPage } from "./pages/LanguagesPage";
import { ResultsPage } from "./components/results/ResultsPage";

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
        path="/faq"
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
