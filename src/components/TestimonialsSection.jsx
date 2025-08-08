import { useEffect, useState } from "react";
import depoimento1 from "../assets/depoimento1.webp";
import depoimento2 from "../assets/depoimento2.webp";
import depoimento3 from "../assets/depoimento3.webp";
import depoimento4 from "../assets/depoimento4.webp";

const testimonials = [
  { id: 1, image: depoimento1, alt: "Depoimento de paciente 1" },
  { id: 2, image: depoimento2, alt: "Depoimento de paciente 2" },
  { id: 3, image: depoimento3, alt: "Depoimento de paciente 3" },
  { id: 4, image: depoimento4, alt: "Depoimento de paciente 4" },
];

const TestimonialsSection = ({ isVisible, onClose }) => {
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);

  useEffect(() => {
    if (isVisible) {
      // Anima cada depoimento com delay crescente
      testimonials.forEach((_, index) => {
        setTimeout(() => {
          setVisibleTestimonials((prev) => [...prev, index]);
        }, index * 300); // 300ms de delay entre cada depoimento
      });
    } else {
      setVisibleTestimonials([]);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="w-full flex flex-col items-center mt-8 px-4">
      {/* Botão fechar */}
      <div className="w-full flex justify-start mb-6">
        <button
          onClick={onClose}
          className="text-custom-green hover:text-custom-pink transition-colors text-2xl font-bold"
        >
          ✕
        </button>
      </div>

      {/* Container dos depoimentos */}
      <div className="w-full space-y-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`transition-all duration-700 ease-out ${
              visibleTestimonials.includes(index)
                ? "transform translate-x-0 opacity-100"
                : index % 2 === 0
                ? "transform -translate-x-full opacity-0"
                : "transform translate-x-full opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-lg bg-white shadow-xl border border-gray-100">
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
