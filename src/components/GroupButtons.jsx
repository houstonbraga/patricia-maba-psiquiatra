import { Globe } from "lucide-react";
import { Button, ButtonLink } from "./Button";

const GroupButtons = ({ onShowTestimonials }) => {
  return (
    <div className="mt-5 w-full flex flex-col items-center gap-3 px-6">
      
      <ButtonLink url="https://api.whatsapp.com/send/?phone=%2B5548996510605&text=Ol%C3%A1+vim+do+site+da+Dra.+Patricia+Maba+e+gostaria+de+agendar+uma+consulta+on-line+particular.&type=phone_number&app_absent=0">Agende sua consulta aqui</ButtonLink>
      <Button onClick={onShowTestimonials}>Depoimentos de pacientes</Button>
      <ButtonLink url="https://drapatriciamaba.com.br/">
        Acessar meu site <Globe width={20} />
      </ButtonLink>
    </div>
  );
};

export default GroupButtons;
