import { useEffect, useState } from "react";

const TrajectorySection = ({ isVisible, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsAnimating(true);
      }, 100);
    } else {
      setIsAnimating(false);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="w-full flex flex-col items-center mt-8 px-8">
      {/* Botão fechar */}
      <div className="w-full flex justify-start mb-6">
        <button
          onClick={onClose}
          className="text-custom-green hover:text-custom-pink transition-colors text-2xl font-bold"
        >
          ✕
        </button>
      </div>

      {/* Container da trajetória */}
      <div
        className={`w-full transition-all duration-700 ease-out ${
          isAnimating
            ? "transform translate-x-0 opacity-100"
            : "transform translate-x-full opacity-0"
        }`}
      >
        <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-6">
          <div className="space-y-4 text-custom-green font-poppins">
            <p className="text-sm leading-relaxed">
              Olá! Sou a Dra. Patrícia Maba e estou aqui para cuidar da sua
              saúde mental, pensando em você, mulher, com toda a sua
              complexidade e desafios. Sei que buscar ajuda pode ser um passo
              grande, e meu objetivo é que você se sinta completamente acolhida
              e compreendida nesse processo.
            </p>

            <p className="text-sm leading-relaxed">
              Minha jornada profissional começou com a Farmácia, o que me deu
              uma base sólida em como o corpo e a mente se interligam. Depois,
              me formei em Medicina pela Universidade do Sul de Santa Catarina
              (Unisul) e, hoje, estou me especializando ainda mais em
              Psiquiatria pela Santa Casa de São Paulo.
            </p>

            <p className="text-sm leading-relaxed">
              Toda essa formação me permite ter um olhar amplo e atualizado para
              oferecer o melhor cuidado a você.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrajectorySection;
