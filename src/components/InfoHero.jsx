import { Instagram } from "./Icons";
import { Email } from "./Icons";
import { WhatsApp } from "./Icons";

const InfoHero = () => {
  return (
    <div className="w-full flex flex-col items-center mt-5">
      <p className="text-sm text-center font-normal tracking-widest max-w-[350px]">
        ✨ Sua jornada importa. Você merece cuidado e escuta com empatia.
        <span className="font-bold">Atendimento online para todo Brasil.</span>
      </p>
      <div className="flex gap-5 justify-center mt-4">
        <Instagram />
        <Email />
        <WhatsApp />
      </div>
    </div>
  );
};

export default InfoHero;
