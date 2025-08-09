const Footer = () => {
  return (
    <div className="w-full mt-auto pt-4 pb-4">
      <div className="flex justify-center flex-col items-center">
        <p className="text-sm text-custom-green font-lorean">Patricia Maba</p>
        <p className="text-xs text-zinc-400">
          Desenvolvido por{" "}
          <a
            className="hover:text-violet-300"
            href="https://www.instagram.com/houstoncodes/"
            target="_blank"
          >
            Houston Braga
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
