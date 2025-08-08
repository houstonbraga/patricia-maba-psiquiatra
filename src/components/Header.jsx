const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-lorean text-custom-green max-w-[300px]">
        DRA. Patricia Maba
      </h1>
      <h1 className="text-3xl font-poppins font-thin text-custom-green tracking-widest">
        MÉDICA
      </h1>

      <hr className="w-52 border-custom-pink border-1 my-4" />

      <span className="text-sm font-poppins text-custom-green">
        CRMSC - 37.909
      </span>
    </div>
  );
};

export default Header;
