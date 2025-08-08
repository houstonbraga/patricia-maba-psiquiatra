import instagram from "../assets/instagram.svg";
import email from "../assets/email.svg";
import whatsapp from "../assets/whatsapp.svg";

export function Instagram() {
  return (
    <a
      href="https://www.instagram.com/dra.patriciamaba/"
      target="_blank"
      className="hover:scale-110 transition-transform"
    >
      <img src={instagram} alt="instagram-link" />
    </a>
  );
}

export function Email() {
  return (
    <a
      href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/drapatriciamaba%40gmail.com"
      target="_blank"
      className="hover:scale-110 transition-transform"
    >
      <img src={email} alt="email-link" />
    </a>
  );
}

export function WhatsApp() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=%2B5548996510605&text=Ol%C3%A1+vim+do+site+da+Dra.+Patricia+Maba+e+gostaria+de+agendar+uma+consulta+on-line+particular.&type=phone_number&app_absent=0"
      target="_blank"
      className="hover:scale-110 transition-transform mt-1"
    >
      <img src={whatsapp} alt="whatsapp-link" />
    </a>
  );
}
