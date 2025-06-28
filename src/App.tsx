import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { TestPage } from './components/test/TestPage';
import HomePage from './pages/HomePage';
import { Layout } from './layout/Layout';

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
        path="/about"
        element={
          <Layout>
            <AboutPage />
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
