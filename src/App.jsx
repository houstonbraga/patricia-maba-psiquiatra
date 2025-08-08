import { useState } from "react";
import bgImage from "./assets/bg.webp";
import GroupButtons from "./components/GroupButtons";
import InfoHero from "./components/InfoHero";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TestimonialsSection from "./components/TestimonialsSection";
import TrajectorySection from "./components/TrajectorySection";
import PatriciaPhoto from "./components/PatriciaPhoto";
import useTestimonials from "./hooks/useTestimonials";
import useTrajectory from "./hooks/useTrajectory";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isTestimonialsVisible, showTestimonials, hideTestimonials } =
    useTestimonials();
  const { isTrajectoryVisible, showTrajectory, hideTrajectory } =
    useTrajectory();

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
        {!isTestimonialsVisible && !isTrajectoryVisible ? (
          <>
            <InfoHero />
            <GroupButtons
              onShowTestimonials={showTestimonials}
              onShowTrajectory={showTrajectory}
            />
            <PatriciaPhoto />
          </>
        ) : isTestimonialsVisible ? (
          <TestimonialsSection
            isVisible={isTestimonialsVisible}
            onClose={hideTestimonials}
          />
        ) : (
          <TrajectorySection
            isVisible={isTrajectoryVisible}
            onClose={hideTrajectory}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
