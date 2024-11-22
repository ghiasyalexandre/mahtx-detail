import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MainNav from "./components/MainNav";
import ErrorPage from "./components/ErrorPage";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import PrivacyPolicy from "./components/PrivacyPolicy";
import "./App.css";
import { Suspense } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Welcome to MAHTX Detailing</title>
          <meta
            name="description"
            content="MAHTX Detailing offers premium detailing services for cars and planes, including interior and exterior cleaning, ceramic coating, and paint correction. Contact us today to book your appointment!"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Router>
          <Suspense
            fallback={
              <div
                className="animate-pulse text-5xl h-48 text-center"
                role="status"
                aria-label="Loading"
              >
                Loading...
              </div>
            }
          >
            <MainNav />
            <ScrollToTop />
            <main>
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
            </main>
            <Footer />
          </Suspense>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
