import { Globe } from "lucide-react";
import { Button, ButtonLink } from "./Button";

const GroupButtons = ({ onShowTestimonials, onShowTrajectory }) => {
  return (
    <div className="mt-5 w-full flex flex-col items-center gap-3 px-6">
      <Button onClick={onShowTrajectory}>Minha Trajetória</Button>
      <ButtonLink url="#">Agende sua consulta aqui</ButtonLink>
      <Button onClick={onShowTestimonials}>Depoimentos de pacientes</Button>
      <ButtonLink url="https://drapatriciamaba.com.br/">
        Acessar meu site <Globe width={20} />
      </ButtonLink>
    </div>
  );
};

export default GroupButtons;
