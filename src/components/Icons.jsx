import instagram from "../assets/instagram.svg";
import email from "../assets/email.svg";
import whatsapp from "../assets/whatsapp.svg";

export function Instagram() {
  return (
    <a href="#" className="hover:scale-110 transition-transform">
      <img src={instagram} alt="instagram-link" />
    </a>
  );
}

export function Email() {
  return (
    <a href="#" className="hover:scale-110 transition-transform">
      <img src={email} alt="email-link" />
    </a>
  );
}

export function WhatsApp() {
  return (
    <a href="#" className="hover:scale-110 transition-transform mt-1">
      <img src={whatsapp} alt="whatsapp-link" />
    </a>
  );
}
