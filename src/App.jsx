import { useState } from "react";
import bgImage from "./assets/bg.webp";
import GroupButtons from "./components/GroupButtons";
import InfoHero from "./components/InfoHero";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TestimonialsSection from "./components/TestimonialsSection";

import PatriciaPhoto from "./components/PatriciaPhoto";
import useTestimonials from "./hooks/useTestimonials";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isTestimonialsVisible, showTestimonials, hideTestimonials } =
    useTestimonials();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div
      className="flex flex-col overflow-x-hidden items-center justify-between max-w-md bg-cover bg-center bg-no-repeat min-h-screen bg-opacity-10 pt-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />

      <div className="flex-1 w-full flex flex-col items-center">
        {!isTestimonialsVisible ? (
          <>
            <InfoHero />
            <GroupButtons onShowTestimonials={showTestimonials} />
            <PatriciaPhoto />
          </>
        ) : isTestimonialsVisible ? (
          <TestimonialsSection
            isVisible={isTestimonialsVisible}
            onClose={hideTestimonials}
          />
        ) : null}
      </div>

      <Footer />
    </div>
  );
}

export default App;
