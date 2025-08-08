import PropTypes from "prop-types";

const styles =
  "w-full bg-custom-green py-3 flex justify-center items-center gap-3 rounded-lg text-white font-poppins font-medium hover:bg-opacity-90 transition-all";

export const ButtonLink = ({ url, children }) => {
  return (
    <a className={styles} href={url} target="_blank">
      {children}
    </a>
  );
};

export const Button = ({ onClick, children }) => {
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

ButtonLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
