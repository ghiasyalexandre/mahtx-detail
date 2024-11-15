import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MainNav from "./components/MainNav";
import ErrorPage from "./components/ErrorPage";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";
import { Suspense, lazy } from "react";

const Gallery = lazy(() => import("./components/Gallery"));
const Footer = lazy(() => import("./components/Footer"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const About = lazy(() => import("./components/About"));
const FAQ = lazy(() => import("./components/FAQ"));

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
        rel="stylesheet"
      ></link>
      <Router>
        <Suspense>
          <MainNav />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booking" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
