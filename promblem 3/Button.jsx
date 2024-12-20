import PropTypes from "prop-types";

const Button = ({ variant, children, onClick, ...props }) => {
  // Define the styles for each variant
  const styles = {
    "icon-arrow-primary": { backgroundcolor: "blue", color: "white" },
    primary: { backgroundcolor: "blue", color: "white" },
    secondary: { backgroundcolor: "gray", color: "black" },
    default: { backgroundcolor: "gray", color: "black" },
  };

  // Get the style based on the variant or fallback to default
  const buttonStyle = styles[variant] || styles.default;

  return (
    <button style={buttonStyle} onClick={onClick} {...props}>
      {children}
    </button>
  );
};


// Prop types for the Button component
Button.propTypes = {
  variant: PropTypes.oneOf([
    "icon-arrow-primary",
    "primary",
    "secondary",
    "default",
  ]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

// Default props for the Button component
Button.defaultProps = {
  variant: "default",
  onClick: () => {},
};

export default Button;
