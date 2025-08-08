import { useState, useCallback } from "react";

const useTestimonials = () => {
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);

  const showTestimonials = useCallback(() => {
    setIsTestimonialsVisible(true);
  }, []);

  const hideTestimonials = useCallback(() => {
    setIsTestimonialsVisible(false);
  }, []);

  return {
    isTestimonialsVisible,
    showTestimonials,
    hideTestimonials,
  };
};

export default useTestimonials;
