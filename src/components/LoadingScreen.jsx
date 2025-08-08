import { useState, useEffect } from "react";
import logoVerde from "../assets/logo-verde.png";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);

      // Aguarda a animação de fade-out terminar
      setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete();
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-custom-pink flex items-center justify-center z-50 transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">
        <img
          src={logoVerde}
          alt="Logo Patricia Maba"
          className="w-64 h-64 object-contain animate-pulse"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
