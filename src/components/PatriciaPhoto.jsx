import fotoPatricia from "../assets/foto-dra-patricia.webp";

const PatriciaPhoto = () => {
  return (
    <div className="w-full -mx-8 -mt-6">
      <img
        src={fotoPatricia}
        alt="Dra. Patricia Maba"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default PatriciaPhoto;
